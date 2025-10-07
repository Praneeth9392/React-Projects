import React from 'react'
import './AboutUs.css'
import "bootstrap/dist/css/bootstrap.min.css";


function Aboutus() {
  return (
    <>
    <div className="about">
       <div className='container-fluid main-bg'>
          <h1 className='text-center fw-bolder'>ABOUT US</h1>
       </div>
  
          {/* OUR SERVICES */}
      <div className="container services m-5 p-5">
        <h6 className='text-success'>our services</h6>
        <h3><strong>Our Commitment to Excellence</strong></h3>
    <div className="row g-4">

      <div className="col-12 col-sm-6 col-md-3">
        <div className="card h-100 text-center">
          <img src="/images/dine-in.jpg" className="card-img-top" alt="Dine-In" />
          <div className="card-body">
            <h4 className="card-title">Serve on Table</h4>
            <p className="card-text">
              Enjoy freshly prepared meals served right at your table with warmth and care.
            </p>
          </div>
        </div>
      </div>

     <div className="col-12 col-sm-6 col-md-3">
        <div className="card h-100 text-center">
          <img src="/images/delivery.jpg" className="card-img-top" alt="Home Delivery" />
          <div className="card-body">
            <h4 className="card-title">Fast Delivery</h4>
            <p className="card-text">
              Get your favorite dishes delivered hot and fresh at your doorstep in no time.
            </p>
          </div>
        </div>
      </div>

     <div className="col-12 col-sm-6 col-md-3">
        <div className="card h-100 text-center">
          <img src="/images/takeaway.jpg" className="card-img-top" alt="Takeaway" />
          <div className="card-body">
            <h4 className="card-title">Takeaway</h4>
            <p className="card-text">
              Order ahead and pick up your food conveniently packed and ready to go.
            </p>
          </div>
        </div>
      </div>

     <div className="col-12 col-sm-6 col-md-3">
        <div className="card h-100 text-center">
          <img src="/images/catering.jpg" className="card-img-top" alt="Catering Service" />
          <div className="card-body">
            <h4 className="card-title">Catering Service</h4>
            <p className="card-text">
              From small gatherings to big events, we provide catering with a variety of cuisines.
            </p>
          </div>
        </div>
      </div>

    </div>
      </div>


      {/* about us */}
         {/* ABOUT US */}
    <div className="aboutus ">

        {/* chef with text top */}
        <div className="container top-section row align-items-center mt-5 pt-5 aboutUs-section2">
         {/* Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <div className="aboutus-container position-relative">
              <img src="images/about-main-img.jpg" alt="About Us" className="rounded main-img img-fluid" />
              <img src="clientImages/flower.png" alt="Flower" className="flower autoRotate" />
            </div>
          </div>

          {/* Text */}
         <div className="col-12 col-md-6">
            <h1 className="about-heading">
              ABOUT 
            </h1>
            <div className='content d-flex  justify-content-center'>
              <h1 className='us'>US</h1>
                <p className="about-description mt-3 ">
                  At <strong>Zomo</strong>, we believe food is not just about taste — it’s an
                  experience. Our journey started with a passion for creating authentic,
                  fresh, and flavorful dishes that bring people together.  
              <br /><br />
              Every recipe is crafted with love, using locally sourced ingredients and
              time-tested methods. Whether you’re here to enjoy a quick bite or a
              hearty meal, we promise every dish will leave you satisfied and smiling.  
              <br /><br />
              <strong>Taste the difference. Taste Zomo.</strong>
            </p>
            </div>
          
          </div> 
        </div>

      {/* bottom section */}
      
   <div className="bottom-section d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center text-center text-md-start">
        
  <p className="about-para mx-2">
    Welcome to <strong>Zomo</strong>, your one-stop destination for delicious, authentic, and freshly prepared food. 
    Our mission is simple — to bring people together through flavors that speak to the heart. 
    From quick bites to hearty meals, we focus on quality, freshness, and a memorable dining experience.  
  </p>

  <p className="about-para mx-2">
    What makes us different? Every recipe at Zomo is carefully crafted using locally sourced ingredients 
    and traditional cooking methods. We combine passion with innovation, ensuring that every dish 
    not only satisfies your taste buds but also tells a story of culture, love, and care.  
  </p>

  <div className="text-center mt-3 mt-md-0 mx-2">
    <img
      src="/clientImages/aboutimg.jpg"
      alt="About Us"
      className="img-fluid rounded shadow"
    />
  </div>
    </div>

       

    </div>


     {/* team */}
        <div className="container chefs m-5 p-5">
        <h6 className="text-success">Our Team</h6>
        <h3><strong>Meet Our Chefs</strong></h3>

        <div className="row g-4">

          <div className="col-sm-3 mt-5">
            <div className="card h-100 text-center">
              <img src="/images/chef1.jpg" className="card-img-top " alt="Master Chef" />
              <div className="card-body">
                <h4 className="card-title">Chef Antonio</h4>
                <p className="card-text text-muted">Master Chef</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3  mt-5">
            <div className="card h-100 text-center">
              <img src="/images/chef2.jpg" className="card-img-top " alt="Assistant Chef" />
              <div className="card-body">
                <h4 className="card-title">Chef Maria</h4>
                <p className="card-text text-muted">Assistant Chef</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3  mt-5">
            <div className="card h-100 text-center">
              <img src="/images/chef3.jpg" className="card-img-top " alt="Pastry Chef" />
              <div className="card-body">
                <h4 className="card-title">Chef Rahul</h4>
                <p className="card-text text-muted">Pastry Chef</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3  mt-5">
            <div className="card h-100 text-center">
              <img src="/images/chef4.jpg" className="card-img-top " alt="Sous Chef" />
              <div className="card-body">
                <h4 className="card-title">Chef Aisha</h4>
                <p className="card-text text-muted">Sous Chef</p>
              </div>
            </div>
          </div>

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
  )
}

export default Aboutus