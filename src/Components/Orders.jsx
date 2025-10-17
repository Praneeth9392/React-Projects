import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./Orders.css";
import { addOrder, removeAllOrder } from "../store";
import { jsPDF } from "jspdf"; //  Import jsPDF
import autoTable from "jspdf-autotable";
import { FaFilePdf } from "react-icons/fa"; //  Invoice icon

function Orders() {
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [expandedOrders, setExpandedOrders] = useState({});

  const toggleOrder = (index) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

// Function to generate PDF invoice
// const downloadInvoice = (order, index) => {
//   const doc = new jsPDF();

//   // === HEADER / BRANDING ===
//   doc.setFontSize(22);
//   doc.setTextColor(40, 40, 40);
//   doc.text("ZOMO Pvt. Ltd.", 14, 20);

//   doc.setFontSize(11);
//   doc.setTextColor(100);
//   doc.text("123 Business Street, Hyderabad, India", 14, 28);
//   doc.text("+91 93928 45663 | support@zomo.com", 14, 34);
//   doc.text("GSTIN: 36ABCDE1234F1Z5", 14, 40);

//   // === INVOICE TITLE ===
//   doc.setFontSize(16);
//   doc.setTextColor(0);
//   doc.text("Order Invoice", 150, 20);

//   // === ORDER INFO ===
//   doc.setFontSize(12);
//   doc.setTextColor(50);
//   doc.text(`Invoice No: INV-${index + 1001}`, 14, 55);
//   doc.text(`Order No: #${index + 1}`, 14, 62);
//   doc.text(`Order Date: ${order.date}`, 14, 69);
//   doc.text(`Payment Mode: ${order.paymentMode || "Online"}`, 14, 76);

//   // === CUSTOMER INFO (optional) ===
//   doc.setFontSize(12);
//   doc.text("Billed To:", 150, 55);
//   doc.setFontSize(11);
//   doc.text("Customer Name", 150, 62);
//   doc.text("Address Line 1", 150, 68);
//   doc.text("City, State - Pincode", 150, 74);

//   // === ORDER ITEMS TABLE ===
//   const tableColumn = ["Item", "Description", "Qty", "Price", "Total"];
//   const tableRows = [];

//   order.items.forEach((item) => {
//     tableRows.push([
//       item.name,
//       item.description || "-",
//       item.quantity,
//       `₹${item.price}`,
//       `₹${item.price * item.quantity}`,
//     ]);
//   });

//   autoTable(doc, {
//     head: [tableColumn],
//     body: tableRows,
//     startY: 85,
//     styles: { fontSize: 11, cellPadding: 3 },
//     headStyles: { fillColor: [41, 128, 185], textColor: 255, halign: "center" },
//     bodyStyles: { halign: "center" },
//   });

//   // === TOTAL AMOUNT ===
//   const finalY = doc.lastAutoTable?.finalY || 100;
//   doc.setFontSize(13);
//   doc.setTextColor(0);
//   doc.text(`Subtotal: ₹${order.price}`, 150, finalY + 10);
//   doc.text("GST (18%): ₹" + (order.price * 0.18).toFixed(2), 150, finalY + 18);
//   doc.setFontSize(14);
//   doc.setFont(undefined, "bold");
//   doc.text(`Grand Total: ₹${(order.price * 1.18).toFixed(2)}`, 150, finalY + 28);

//   // === FOOTER ===
//   doc.setFontSize(10);
//   doc.setFont(undefined, "normal");
//   doc.text("Terms & Conditions:", 14, finalY + 20);
//   doc.text("1. This is a computer-generated invoice.", 14, finalY + 26);
//   doc.text("2. Goods once sold will not be taken back or refunded.", 14, finalY + 32);
//   doc.text("3. For support, contact support@zomo.com.", 14, finalY + 38);

//   doc.setFontSize(11);
//   doc.setTextColor(100);
//   doc.text("Thank you for shopping with ZOMO! Visit us again 🙏", 14, finalY + 50);

//   // === SAVE PDF ===
//   doc.save(`ZOMO_Invoice_${index + 1}.pdf`);
// };


  return (
    <div className="container-fluid orders-container mt-5 pt-5">

      <h1 className="orders-title">📦 Your Orders</h1>

      {orders.length === 0 ? (
        <p className="no-orders">No orders placed yet.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order, index) => (
            <li key={index} className="order-card mb-4 p-3 border rounded">
              
              {/* Header with toggle + invoice download */}
              <div className="order-header d-flex justify-content-between align-items-center mb-3">
                <h3 className="order-heading">Order #{index + 1}</h3>
                <div className="d-flex align-items-center gap-2">
                  <span className="order-status badge bg-warning text-dark me-2">
                    Accepted
                  </span>
                  <button 
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => toggleOrder(index)}
                  >
                    {expandedOrders[index] ? "Hide Items" : "Show Items"}
                  </button>

                  {/* Invoice Download Icon */}
                  {/* <FaFilePdf 
                    size={22} 
                    className="text-danger cursor-pointer"
                    onClick={() => downloadInvoice(order, index)} 
                    title="Download Invoice"
                    style={{cursor:"pointer"}}
                  /> */}
                </div>
              </div>

              {/* Order dates */}
              <div className="mb-3">
                <p><strong>Order Date:</strong> {order.date}</p>
                <p className="supplier-name">Supplier: <span className="text-primary">ZOMO</span></p>
                <p className="supplier-contact">Contact: <span className="text-danger">9392845663</span></p>
              </div>

              {/* Items inside the order (hidden by default) */}
              {expandedOrders[index] && (
                <ul className="order-items list-unstyled">
                  {order.items.map((item, i) => (
                    <li 
                        key={i} 
                        className="order-item d-flex justify-content-between align-items-start p-3 border rounded mb-3 list-hover"
                      >
                        {/* Left side: image + name */}
                        <div className="d-flex flex-column align-items-center justify-content-center m-3">
                          <img
                            src={item.imageurl}
                            alt={item.name}
                            className="item-image rounded"
                            style={{ width: "150px", height: "100px", objectFit: "cover", marginBottom: "5px", borderRadius: "16px" }}
                          />
                          <p className="item-name fw-bold text-center mb-0">{item.name}</p>
                        </div>

                        {/* Middle: Description + Quantity */}
                        <div className="item-middle flex-grow-1 px-3">
                          <p className="mb-1"><b>Description:</b></p>
                          <p className="item-description mb-2">{item.description}</p>
                          <p className="mb-0 text-muted"><b>Qty:</b> {item.quantity} x ₹{item.price}</p>
                        </div>

                        {/* Right side: Price + Track */}
                        <div className="text-end d-flex flex-column align-items-end">
                          <p className="mb-2 fw-bold text-success">
                            <span className="text-black fw-bolder">Price </span><br />
                            ₹{item.price * item.quantity}
                          </p>
                          <button className="btn btn-success btn-sm">Track</button>
                        </div>
                      </li>
                  ))}
                </ul>
              )}

              {/* Order summary */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="order-total mb-0">
                  <strong>Total:</strong> ₹{order.price}
                </p>
                <p className="payment-mode mb-0">
                  <strong>Payment Mode:</strong> {order.paymentMode || "Online"}
                </p>
              </div>
            </li>
          ))}

          <button
            className="w-100 rounded-3 btn btn-danger mt-3"
            onClick={() => dispatch(removeAllOrder())}
          >
            Remove All Orders
          </button>
        </ul>
      )}
    </div>
  );
}

export default Orders;
