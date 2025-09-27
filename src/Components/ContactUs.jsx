import React from 'react'
import './ContactUs.css';

function Contactus() {
  return (
    <>
    <div className='contact-us'>
       {/* heading */}
          <div class="container-fluid contact-header text-center p-5 bg-secondary">
            <h2 class="fw-bold">Get in Touch</h2>
            <p >We’re here to answer your questions, assist with your orders, and hear your feedback.</p>
          </div>
        
        {/* conatact info */}
          <div class="contact-info container py-5">
            <div class="row g-4">
              <div class="col-md-4 text-center">
                <i class="bi bi-telephone-fill fs-1 text-success"></i>
                <h5 class="mt-3">Call Us</h5>
                <p class="text-muted">+91 9392845663</p>
              </div>

              <div class="col-md-4 text-center">
                <i class="bi bi-envelope-fill fs-1 text-success"></i>
                <h5 class="mt-3">Email Us</h5>
                <p class="text-muted">support@zomo.com</p>
              </div>

              <div class="col-md-4 text-center">
                <i class="bi bi-geo-alt-fill fs-1 text-success"></i>
                <h5 class="mt-3">Visit Us</h5>
                <p class="text-muted">123, Food Street, Hyderabad, India</p>
              </div>
            </div>
          </div>


      {/* form */}
        <div class=" contact-form container-fluid py-5">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <h4 class="fw-bold mb-4">Send Us a Message</h4>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name" required/>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea class="form-control" id="message" rows="4" placeholder="Write your message here..." required></textarea>
                </div>

                <button type="submit" class="btn btn-success px-4">Send Message</button>
              </form>
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
 </div>
    </>
  )
}

export default Contactus