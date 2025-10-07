import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateQuantity, removeFromCart,  addOrder, clearCart } from "../store";
import emailjs from "@emailjs/browser";
import "./Cart.css";
import "react-toastify/dist/ReactToastify.css";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
import {
  discountAmount,
  totalAmount as calculateTotalAmount,
  getCouponDiscount,
} from "./discountUtils";
import { Icons, toast, ToastContainer, } from "react-toastify";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";

function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isvalidUser = useSelector((state) => state.userAuth.isValidUser);

  const [discount, setDiscount] = useState(0);
  const totalAmount = calculateTotalAmount(cartItems);
  const discountValue = discountAmount(totalAmount, discount);
  const [couponCode, setCouponCode] = useState("");
  const [couponResult, setCouponResult] = useState({ isValid: false, couponDiscountPercent: 0, couponDiscountAmount: 0 });
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  const netAmount = totalAmount - discountValue - couponResult.couponDiscountAmount;
  const taxAmount = (netAmount * 5) / 100;

  const handleApplyCoupon = () => {
    const result = getCouponDiscount(couponCode, totalAmount);
    setCouponResult(result);
    result.isValid ? toast.success("🎉 Coupon Applied Successfully!") : toast.error("❌ Invalid Coupon Code");
  };

  const handleCheckout = () => {
    if (!customerEmail) {
      toast.error("Please enter a valid Email before placing order");
      return;
    }
    const templateParams = {
      order_id: Date.now(),
      orders: cartItems.map((item) => ({ name: item.name, price: (item.price * item.quantity).toFixed(2), units: item.quantity })),
      cost: { shipping: 50, tax: taxAmount.toFixed(2), total: ((netAmount.toFixed(2)) + shipping + taxAmount) },
      email: customerEmail,
    };

    emailjs.send("service_a1oqw72", "template_gj9on6p", templateParams, "zG3TZxb32AbPSBjGz")
      .then(() => toast.success("✅ Email sent successfully"))
      .catch(() => toast.error("❌ Email sending FAILED. Please try again."));
  };


  // hadling purchase
  const handleOrderPurchase = () => {

   if (!isvalidUser) {
    // 🚨 If not logged in, redirect to signup
    Swal.fire({
      title: "You need an account!",
      text: "Please sign up before placing an order.",
      icon: "warning",
      confirmButtonText: "Go to Sign Up"
    }).then(() => {
      navigate("/signUp");
    });
    return;
  }


  if (!customerEmail) {
    toast.error("Please enter a valid Email before placing order");
    return;
  }

  // Save order and clear cart
  const purchaseDetails = {
     date: new Date().toLocaleString(), 
     items: [...cartItems], 
     price: netAmount + taxAmount 
    };
    
  dispatch(addOrder(purchaseDetails));
  dispatch(clearCart());

  // Confetti
  confetti({ particleCount: 80, spread: 120 });

  // Step 1: SweetAlert success message
  Swal.fire({
    title: "Order Placed Successfully!",
    icon: "success",
    confirmButtonText: "OK",
  }).then(() => {
    // Step 2: Countdown message
    let countdown = 5;

    Swal.fire({
      title: "Redirecting to Orders page...",
      html: `Redirecting in <strong>${countdown}</strong> seconds...`,
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        const timerInterval = setInterval(() => {
          countdown -= 1;
          if (countdown <= 0) {
            clearInterval(timerInterval);
            Swal.close(); // close the alert
            navigate("/orders"); // redirect
          } else {
            Swal.update({ html: `Redirecting in <strong>${countdown}</strong> seconds...` });
          }
        }, 1000);
      }
    });
  });
};



  return (
    <>
      <h1 className="cart text-center bg-white mb-2">🛒 Your Cart</h1>
       {/*  Toast container (always mounted once) */}
      <ToastContainer position="top-right" autoClose={1500} />

      <div className="container cart-items mt-1  mb-2 rounded">
        {/* Cart Items */}
        <div className="products ">
          {cartItems.length === 0 ? (
             <div className="text-center">
                  <p className="text-muted">Your cart is empty</p>
                  <img
                    src="\images/empty-shopping-cart.jpg"
                    alt="Empty cart"
                    className="img-fluid mt-2 empty-cart-img"
                   
                  />
             </div>
    
          ) : (
             
            <div className="list-group">
              
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="list-group-item d-flex align-items-center justify-content-evenly gap-4 shadow-sm mb-2 rounded "
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <img
                    src={product.imageurl}
                    alt={product.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-1">{product.name}</h6>
                    <small className="text-muted">₹{product.price}</small>
                  </div>

                {/* QUANTITY */}
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: product.id, quantity: -1 })
                        )
                      }
                    >
                      –
                    </button>
                    <span className="mx-2 fw-bold">{product.quantity}</span>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: product.id, quantity: 1 })
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="ms-3 fw-bold text-success">
                    ₹{product.price * product.quantity}
                  </div>

                  <button
                    className="btn btn-sm btn-danger ms-3"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
               {cartItems.length > 0 && 
                  <button 
                    className="btn bg-black mt-3 w-100 text-white"
                    onClick={() => dispatch(clearCart())}
                   >
                    Clear Cart
                  </button>
        }
            </div>
          )}

          

        </div>
       

        {/* Bill Section */}
      {cartItems.length > 0 &&    
          <div className="discount p-4 rounded shadow-sm h-100">
                <h2 className="mb-3">💸 Order Summary</h2>

                {/* Total */}
                <div className="d-flex justify-content-between">
                  <span>Total:</span>
                  <strong>₹{totalAmount}</strong>
                </div>

                {/* Discount */}
                {discount > 0 && (
                  <div className="d-flex justify-content-between text-danger">
                    <span>Discount Applied ({discount}%):</span>
                    <span>– ₹{discountValue}</span>
                  </div>
                )}

                {/* Coupon */}
                {couponResult.isValid ? (
                  <div className="d-flex justify-content-between text-success mt-2">
                    <span>
                      Coupon <strong>{couponCode}</strong> ({couponResult.couponDiscountPercent}% Off):
                    </span>
                    <span>– ₹{couponResult.couponDiscountAmount}</span>
                  </div>
                ) : couponCode.length > 0 ? (
                  <p className="text-danger mt-2">Invalid Coupon Code</p>
                ) : null}

                {/* Tax */}
                <div className="d-flex justify-content-between">
                  <span>Tax Amount 5% :</span>
                  <span>₹{taxAmount}</span>
                </div>

                {/* Net */}
                <div className="d-flex justify-content-between fw-bold mt-2">
                  <span>Net Amount:</span>
                  <span className="text-success">₹{netAmount + taxAmount}</span>
                </div>



                        {/* Discount Buttons */}
                          <div className="mt-3">
                            <button className="btn btn-outline-primary btn-sm mx-1" onClick={() => setDiscount(10)} >10% Off </button>
                            <button className="btn btn-outline-primary btn-sm mx-1" onClick={() => setDiscount(20)}>20% Off</button>
                            <button className="btn btn-outline-primary btn-sm mx-1" onClick={() => setDiscount(30)}>30% Off</button>
                            <button className="btn btn-outline-primary btn-sm mx-1"onClick={() => setDiscount(0)}>Reset</button>
                          </div>

                          {/* COUPON SECTION */}
                          <div className="coupon-section mt-3">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control coupon-input"
                                placeholder="Enter coupon code"
                                value={couponCode}onChange={(e) => setCouponCode(e.target.value)}
                                />

                            <button className="btn btn-success coupon-btn"  onClick={handleApplyCoupon}>
                              Apply
                          </button>


                            </div>
                          </div>

                          

                    {/* Email & Checkout */}
                    <div className="checkout-box">
                        <label className="checkout-label">
                          Enter your Gmail to receive order confirmation:
                        </label>
                        <input
                          type="email"
                          className="checkout-input"
                          placeholder="example@gmail.com"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                        />
                        {/* <button className="btn-checkout" onClick={handleCheckout}>
                          Checkout & Send Email
                        </button> */}
                    </div>


                  
                  {/* PAYMENT PROCESS */}
                        <div className="payment-methods mt-4">
                          <h5 className="mb-3">💳 Choose Payment Method</h5>
                          <div className="d-flex gap-3 justify-content-center">
                            <button 
                              className={"payment-btn bg-primary"} 
                              onClick={() => setPaymentMode("QR")}
                            >
                              📷 QR Code
                            </button>
                            <button 
                              className={"payment-btn bg-primary"} 
                              onClick={() => setPaymentMode("CARD")}
                            >
                              💳 Card
                            </button>
                          </div>
                        </div>


                    {/* QR CODE SECTION */}
                      {paymentMode === "QR" && 
                        <div className="qr-wrapper">
                          <h5 className="qr-title pt-2">📷 Scan UPI QR to pay ₹{(netAmount + taxAmount).toFixed(2)}</h5>
                          <div className="qr-box">
                            <QRCode 
                              value={`upi://pay?pa=praneethenjapelly@ybl&pn=ZOMO-STORE&am=${(netAmount + taxAmount).toFixed(2)}&cu=INR`}
                              size={180}
                              bgColor="#ffffff"
                              fgColor="#000000"
                              className="p-2"
                            />
                          </div>
                          <p className="qr-note">UPI ID: <strong>9392845663@ybl</strong></p>
                        </div>
                      }

                
                 
                  {/* COMPLETE PURCHASE BUTTON */}
                   <button className="p-2 mt-4 bg-success rounded-3 w-100" onClick={() => { handleOrderPurchase(); handleCheckout(); }}>
                    Place Order
                  </button>
          </div>
      }
 
      </div>
    </>
  );
}

export default Cart;
