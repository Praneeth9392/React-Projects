import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store";
import './ProductDetails.css';
import { toast, ToastContainer } from "react-toastify";

function ProductDetails() {
  let { id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let topRef = useRef(null);

  // Read all products from redux
  let allProducts = useSelector((state) => state.product);

  // Combine all categories into one array
  let products = [
    ...allProducts.vegItems,
    ...allProducts.nonVegItems,
    ...allProducts.drinks,
    ...allProducts.desserts,
  ];

  // Find the selected product
  let product = products.find((p) => p.id === Number(id));

  // Find similar items (same category, exclude current product)
  let similarItems = [];
  if (allProducts.vegItems.includes(product)) {
    similarItems = allProducts.vegItems.filter((p) => p.id !== product.id);
  } else if (allProducts.nonVegItems.includes(product)) {
    similarItems = allProducts.nonVegItems.filter((p) => p.id !== product.id);
  } else if (allProducts.drinks.includes(product)) {
    similarItems = allProducts.drinks.filter((p) => p.id !== product.id);
  } else if (allProducts.desserts.includes(product)) {
    similarItems = allProducts.desserts.filter((p) => p.id !== product.id);
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(similarItems.length / itemsPerPage);

  // Slice data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = similarItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
      <>
        <div ref={topRef} className="container product-details">
         
          {/* Toast container (always mounted once) */}
         <ToastContainer position="top-right" autoClose={3000} />

          <div className="row bg-light p-4 rounded-3 shadow">
            {/* Product Image */}
            <div className="col-sm-6 text-center">
              <img
                src={product.imageurl}
                alt={product.name}
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </div>

            {/* Product Details */}
            <div className="col-sm-6 mt-4 pt-5">
              <h2 className="mb-3">{product.name}</h2>
              <p className="text-muted">
                {product.description || "No description available."}
              </p>
               <h4 className="text-success mb-3">Price : ₹{product.price}</h4>

              <button
                className="btn btn-success rounded-5 px-4"
                onClick={() =>{ 
                   dispatch(addToCart(product));
                   toast.success(`${product.name} added to cart`)}
                }
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Similar Items Section */}
            <div className="container mt-5">
              <h2 className="mb-4">Similar Items</h2>
              <div className="row">
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <li
                      key={item.id}
                      className="col-6 col-md-6 col-lg-3 mb-4"
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      style={{ cursor: "pointer", listStyle: "none" }}
                    >
                      <div className="card ">
                        <img
                          src={item.imageurl}
                          alt={item.name}
                          className="card-img-top"
                          style={{ height: "180px", objectFit: "cover" , borderRadius:"10px"}}
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="text-success">Price : ₹{item.price}</p>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No similar items found.</p>
                )}
              </div>

              {/* Pagination */}
                <div className="pagination text-center m-4 d-flex justify-content-center align-items-center">

                   {/* Previous button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="btn btn-sm mx-1"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#198754",
                    color: "white",
                    border: "1px solid #198754",
                    marginBottom: "30px",
                    opacity: currentPage === 1 ? 0.5 : 1,
                    cursor: currentPage === 1 ? "not-allowed" : "pointer"
                  }}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className="btn btn-sm mx-1"
                      style={{
                        fontWeight: currentPage === index + 1 ? "bold" : "normal",
                        backgroundColor: currentPage === index + 1 ? "#198754" : "white",
                        color: currentPage === index + 1 ? "white" : "black",
                        border: "1px solid #198754",
                        borderRadius: "5px",
                        textAlign: "center",
                        marginBottom: "30px",
                      }}
                    >
                      {index + 1}
                    </button>
                  ))}

                  {/* Next button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="btn btn-sm mx-1"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#198754",
                    color: "white",
                    border: "1px solid #198754",
                    marginBottom: "30px",
                    opacity: currentPage === totalPages ? 0.5 : 1,
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer"
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>

                </div>

            </div>
        </div>  

        {/* FOOTER */}
        <footer className="bg-dark text-white mt-5 pt-4 pb-2" id="footer">

          <div className="container">
            <div className="row">
              {/* Brand */}
              <div className="col-md-3 mb-3">
                <h4 className="text-warning">
                  <i>ZOMO</i>
                </h4>
                <p>
                  Delivering the taste of life right to your doorstep. Fresh, fast,
                  and delicious!
                </p>
              </div>

              {/* Contact */}
              <div className="col-md-3 mb-3">
                <h5>📞 Contact Us</h5>
                <ul className="list-unstyled">
                  <li>📍 Hyderabad, India</li>
                  <li>📱 +91 98765 43210</li>
                  <li>✉️ contact@zomofood.com</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="col-md-3 mb-3">
                <h5>🔗 Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="Non-veg.html"
                      className="text-white text-decoration-none"
                    >
                      🍗 Non-Veg
                    </a>
                  </li>
                  <li>
                    <a href="veg.html" className="text-white text-decoration-none">
                      🥗 Veg
                    </a>
                  </li>
                  <li>
                    <a
                      href="desserts.html"
                      className="text-white text-decoration-none"
                    >
                      🧁 Desserts
                    </a>
                  </li>
                  <li>
                    <a
                      href="drinks.html"
                      className="text-white text-decoration-none"
                    >
                      🥤 Drinks
                    </a>
                  </li>
                  <li>
                    <a
                      href="about-us.html"
                      className="text-white text-decoration-none"
                    >
                      ℹ️ About Us
                    </a>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="mt-2">
                  <a href="https://www.facebook.com/">
                    <i className="bi bi-facebook text-white me-2"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="bi bi-instagram text-white me-2"></i>
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="bi bi-twitter text-white"></i>
                  </a>
                </div>
              </div>

              {/* Address with Map */}
              <div className="col-md-3 mb-3">
                <h5 className="text-center text-white fw-bold">📍 Our Address</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.714626787301!2d78.43432063594254!3d17.4391857353063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c55bb43183%3A0x1abc135b23ee2703!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1754153949656!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            <hr className="border-light" />
            <div className="text-center">
              <p className="mb-0">&copy; 2025 ZOMO. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </>
  );
}

export default ProductDetails;
