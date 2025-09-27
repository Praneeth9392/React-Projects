import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../store';
import './Desserts.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Desserts() {
  const desserts = useSelector(state => state.product.desserts);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(desserts.length / itemsPerPage);

  // Slice data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = desserts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
    <div className="container dessert-items">

      {/* ✅ Toast container (always mounted once) */}
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="mb-4 text-center fw-bold">🍰 DESSERTS</h2>

      {/* Cards Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 ">
        {currentItems.map((product) => (
         <div className="col-6 col-md-6 col-lg-3 mb-4" key={product.id}>
            <div
              className="card h-100 "
              style={{ borderRadius: "1.5rem" }}
               onClick={() => navigate(`/product/${product.id}`)}
            >

                {/* image with badge */}
            <div className="position-relative">
              <img
                  src={product.imageurl}
                  className="card-img-top p-2"
                  alt={product.name}
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "1.5rem"
                  }}
              />

              {/* Show badge only if price > 200 */}
              {product.price >= 180 && (
                <span
                  className="badge bg-danger position-absolute"
                  style={{ top: "15px", right: "15px", borderRadius: "10px" }}
                >
                  5% OFF
                </span>
              )}
            </div>


              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{product.name}</h5>
                {/* <p className="card-text small text-muted">{product.description}</p> */}
                <p className="fw-bold text-success text-center mb-2">
                  ₹{product.price}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card's onClick
                    dispatch(addToCart(product));
                    toast.success(`${product.name} added to cart`);
                  }}
                  className="btn btn-success mt-auto w-100"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
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
               marginBottom:"30px"
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

export default Desserts;
