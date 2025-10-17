
import "bootstrap/dist/css/bootstrap.min.css";   // Bootstrap first
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Home.css';  // custom AFTER bootstrap
import Veg from "./Veg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import confetti from "canvas-confetti";
import Swal from "sweetalert2";






function Home(){

  const navigate =  useNavigate();
   
  useEffect(() => {
  // Check if ad was already shown
  // const adShown = localStorage.getItem("adShown");

  // if (!adShown) {
    Swal.fire({
      title: "🎉 Special Offer!",
      html: `
        <h3 style="color:#ff5733; font-weight:bold;">Get 20% OFF on your first order</h3>
        <p style="font-size:16px; color:#444;">Use code: <b style="color:#e63946;">ZOMO20</b> at checkout!</p>
      `,
      imageUrl: "/images/offer.jpg",
      imageWidth: 450,
      imageHeight: 280,
      imageAlt: "Ad Banner",
      background: "#fff7e6",
      color: "#333",
      showCancelButton: true,
      confirmButtonText: "Order Now",
      cancelButtonText: "❌ Later",
      confirmButtonColor: "#ff5733",
      cancelButtonColor: "#6c757d",
      customClass: {
        popup: "rounded-4 shadow-lg p-3",
        title: "fw-bold text-dark",
        confirmButton: "px-4 py-2 rounded-pill",
        cancelButton: "px-4 py-2 rounded-pill",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/nonveg");
      }
    });

    // Save flag so it doesn’t show again
    // localStorage.setItem("adShown", "true");
  // }
}, []);



useEffect(() => {
  const elements = document.querySelectorAll(".autoSlide");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);





 
    return(

    <>
   
   
        <div  className="container home mt-5 pt-5">
          {/* MAIN TEXT */}
          <div className="main-text text-center">
               <h1 className='text-success main-text'><b>Deliciousness Delivered</b> </h1>
               <h3 className='text-black'><b>to Your Doorstep</b></h3>
               <p>Where happiness meets your doorstep.</p>
          </div>

          {/* IMAGE */}
          <div className="image">
               <img src="\images\background1.png" alt="" />
          </div>
         
        </div>


        {/* varaities */}
       <div className="container varaites">
      <h2 className="text-center mt-5 autoSlide">
        Choose from a variety of <br /> 10,000 Dishes
      </h2>
      <p className="text-center autoSlide">
        Welcome to The Biggest Network of Food Ordering & Delivery
      </p>
     <div className="row m-4 autoSlide justify-content-center g-3">
          {/* Veg */}
          <div className="col-6 col-md-3" onClick={() => navigate('/veg')}>
            <div className="cardd bg-secondary h-100 text-center p-4">
              <img src="/images/varties-veg.jpg" alt="Veg" className="img-fluid mx-auto d-block" />
              <div className="card-body">
                <h4 className="text-black">Veg</h4>
              </div>
            </div>
          </div>
          

          {/* Non-Veg */}
          <div className="col-6 col-md-3" onClick={() => navigate('/nonveg')}>
            <div className="cardd bg-secondary h-100 text-center p-4">
              <img src="/images/varties-non-veg.jpg" alt="Non-Veg" className="img-fluid mx-auto d-block" />
              <div className="card-body">
                <h4 className="text-black">Non-Veg</h4>
              </div>
            </div>
          </div>

          {/* Drinks */}
          <div className="col-6 col-md-3" onClick={() => navigate('/drinks')}>
            <div className="cardd bg-secondary h-100 text-center p-4">
              <img src="/images/varties-drink.jpg" alt="Drinks" className="img-fluid mx-auto d-block" />
              <div className="card-body">
                <h4 className="text-black">Drinks</h4>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="col-6 col-md-3" onClick={() => navigate('/desserts')}>
            <div className="cardd bg-secondary h-100 text-center p-4">
              <img src="/images/varties-desserts.jpg" alt="Desserts" className="img-fluid mx-auto d-block" />
              <div className="card-body">
                <h4 className="text-black">Desserts</h4>
              </div>
            </div>
          </div>
        </div>


    </div>

      {/* content with image 1 */}
      <div className="container content1">
        <div className="image1 .autoSlide" >
             <img src="\images\image1.png" alt="" />
        </div>
        <div className="Text text-center autoSlide">
          <h2 className=" text-center">Finger Lickings foods
            at your finger-tips.
          </h2>
          <p className=" text-center"> From sizzling street food to gourmet delights, we bring every flavor right to your door. 
              Discover mouth-watering dishes, freshly prepared and served with love — because great food 
              should always be just a tap away.</p>
          <button className='bg-warning m-3 rounded-3' onClick={() => navigate("/nonveg")}>Order Now</button>    
        </div>
      </div>

           {/* content with image 2 */}
       <div className="container content2">

        {/* text */}
        <div className="Text text-center autoSlide">
          <h2 className="text-center">
            Fresh flavors made for you.
          </h2>
          <p className="text-center">
            Enjoy handpicked ingredients and chef-inspired recipes that bring out the best taste. 
            Whether it’s breakfast, lunch, or dinner, we’ve got something delicious waiting for you.
          </p>
          <button className='bg-warning m-3 rounded-3' onClick={() => navigate("/veg")}>Order Now</button>    
        </div>

        {/* image */}
        <div className="image2 autoSlide" >
             <img src="\images\image2.png" alt=""/>
        </div>
      </div>

        


    {/* CAROUSEL */}
      <div className="container mt-5 mb-4 rounded-3 p-3">
        <h2 className="text-center fw-bold">What our clients say</h2>

        {/* Client Carousel */}
      <div
        id="foodCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {/* 1st */}
          <div className="carousel-item active">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly text-center text-md-start">
              <div className="profile-card mb-3 mb-md-0">
                <div className="circle-bg"></div>
                <img
                  src="/clientImages/client1.png"
                  alt="Priya Patel"
                  className="profile-img"
                />
              </div>
              <div className="text ms-3">
                <h4 className="mt-3">Priya Patel</h4>
                <p className="text-muted">Software Engineer</p>
                <p className="fst-italic review">
                  "Perfect place to order after a busy workday. The meals are fresh,
                  warm, and always arrive on time. Their variety ensures I never get
                  bored, and I love how the packaging keeps everything intact.  
                  It honestly saves me so much effort on busy coding nights.  
                  The customer service is quick and super friendly.  
                  Highly recommend it to anyone with a hectic work schedule!"
                </p>

              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly text-center text-md-start">
              <div className="profile-card mb-3 mb-md-0">
                <div className="circle-bg"></div>
                <img
                  src="/clientImages/client2.png"
                  alt="Rahul Mehta"
                  className="profile-img"
                />
              </div>
              <div className="text ms-3">
                <h4 className="mt-3">Rahul Mehta</h4>
                <p className="text-muted">College Student</p>
                <p className="fst-italic review">
                "Quick delivery and super affordable, which is exactly what students
                like me need. During exams, I rely on them almost daily, and they’ve
                never disappointed. The food portions are generous, filling enough
                to last through late-night study sessions. Ordering is effortless,
                and I love the wallet-friendly combos they offer.  
                It honestly feels like they understand student life perfectly!"
              </p>

              </div>
            </div>
          </div>

          {/* 3rd */}
          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly text-center text-md-start">
              <div className="profile-card mb-3 mb-md-0">
                <div className="circle-bg"></div>
                <img
                  src="/clientImages/client3.png"
                  alt="Ananya Sharma"
                  className="profile-img"
                />
              </div>
              <div className="text ms-3">
                <h4 className="mt-3">Ananya Sharma</h4>
                <p className="text-muted">Fashion Blogger</p>
                  <p className="fst-italic review">
                  "Fresh food, great packaging, and it always looks Insta-ready!
                  The presentation is so neat that I often feature it on my stories,
                  and my followers love it. Beyond the looks, the taste is consistently
                  amazing—healthy yet flavorful. They also have vegan and healthy
                  options that align with my lifestyle. Truly a blend of convenience,
                  taste, and aesthetics!"
                </p>

              </div>
            </div>
          </div>

          {/* 4th */}
          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly text-center text-md-start">
              <div className="profile-card mb-3 mb-md-0">
                <div className="circle-bg"></div>
                <img
                  src="/clientImages/client4.png"
                  alt="Vikram Singh"
                  className="profile-img"
                />
              </div>
              <div className="text ms-3">
                <h4 className="mt-3">Vikram Singh</h4>
                <p className="text-muted">Entrepreneur</p>
                <p className="fst-italic review">
                  "Highly reliable and perfect for both team lunches and family dinners.  
                  My office often places bulk orders, and they manage it effortlessly
                  without compromising quality. Every dish feels thoughtfully prepared,
                  which is rare for delivery services. Their punctuality has made them
                  my go-to choice for important meetings. It’s a service that I trust
                  and recommend to my business circle."
                </p>

              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#foodCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#foodCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      </div>



    {/* ABOUT US */}
    <div className="aboutUs">

        {/* chef with text top */}
        <div  className="container top-section d-flex flex-column-reverse flex-md-row align-items-center justify-content-center mt-5 pt-5 aboutUs-section">
          {/* Image */}
          <div className="aboutUs-img me-5">
            <img src="/clientImages/chef-img.png" alt="About Us" className="img-fluid rounded" />
          </div>

          {/* Text */}
          <div className="aboutUs-text">
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
      {/*
       <div className="bottom-section d-flex align-items-start ">
          <p className="about-para">
            Welcome to <strong>Zomo</strong>, your one-stop destination for delicious, authentic, and freshly prepared food. 
            Our mission is simple — to bring people together through flavors that speak to the heart. 
            From quick bites to hearty meals, we focus on quality, freshness, and a memorable dining experience.  
          </p>

          <p className="about-para">
            What makes us different? Every recipe at Zomo is carefully crafted using locally sourced ingredients 
            and traditional cooking methods. We combine passion with innovation, ensuring that every dish 
            not only satisfies your taste buds but also tells a story of culture, love, and care.  
          </p>

          
          <div className="w-30 p-3 text-center">
            <img 
              src="/clientImages/aboutimg.jpg" 
              alt="About Us" 
              className="img-fluid rounded shadow" 
            />
          </div>
       </div> 
       */}

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
export default Home;
