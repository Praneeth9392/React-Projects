import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Veg from "./Components/Veg";
import NonVeg from "./Components/NonVeg";
import Drinks from "./Components/Drinks";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";
import Contactus from "./Components/ContactUs";
import FileNotFound from "./Components/FileNotFound";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Desserts from "./Components/Desserts";
import { useState } from "react";
import ProductDetails from "./Components/ProductDetails";
import SignIn from "./Components/SignIn";
import Signup from "./Components/SignUp";

import VoiceSearch from "./Components/VoiceSearch";  // 
import { logoutUser } from "./store";
import AboutUs from "./Components/AboutUs";

function App() {

let dispatch = useDispatch();

  const navigate = useNavigate();
  let cartItems = useSelector((globalState) => globalState.cart);
  let cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  let allProducts = useSelector((globalState) => globalState.product);
  let products = [
    ...allProducts.vegItems,
    ...allProducts.nonVegItems,
    ...allProducts.drinks,
    ...allProducts.desserts,
  ];

  const [searchProduct, setSearchProduct] = useState("");


//  username getting
  const isValidUser = useSelector((state) => state.userAuth.isValidUser);
  const currentUser = useSelector((state) => state.userAuth.currentUser);
   const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/signIn");
  };

  return (
    <>
      <div className="container-fluid header">
        <div className="container mt-3">
          <div className="row d-flex align-items-center justify-content-between text-center text-md-start">
            <div className="col-md-4 mb-2 mb-md-0">
              <h1 className="text-success mb-0">
                <i>
                  <b>ZOMO</b>
                </i>
              </h1>
            </div>

            {/* ✅ Reusable VoiceSearch */}
            <VoiceSearch
              products={products}
              searchProduct={searchProduct}
              setSearchProduct={setSearchProduct}
            />
                      
            
          {/* Sign In / Sign Up OR Welcome & Logout */}
          <div className="col-md-4 d-flex align-items-center justify-content-center gap-3 signin-signup">
            {isValidUser ? (
              <>
                <span className=""><i class="bi bi-person-fill"></i> Welcome {currentUser?.userName}</span>
                <button 
                  className="btn btn-danger rounded-5 px-4" 
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/signIn" 
                  className="btn btn-success text-white rounded-5 px-4"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signUp" 
                  className="btn btn-outline-success rounded-5 px-4"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>



          </div>
        </div>

        {/* NAV BAR … (keep your existing nav here) */}
       <nav className="navbar navbar-expand-lg mt-2 custom-navbar">
          <div className="container-fluid">

            {/* 🔘 Navbar Toggler Button (Hamburger) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#zomoNavbar"
              aria-controls="zomoNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"

            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu */}
            <div className="collapse navbar-collapse" id="zomoNavbar">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                {/* Home */}
                <li className="nav-item">
                  <Link to="/" className="nav-link">🏠 Home</Link>
                </li>

                {/* Menu Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    📖 Menu
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/veg" className="dropdown-item">🥦 Veg</Link>
                    </li>
                    <li>
                      <Link to="/nonveg" className="dropdown-item">🍗 NonVeg</Link>
                    </li>
                    <li>
                      <Link to="/drinks" className="dropdown-item">🥤 Drinks</Link>
                    </li>
                    <li>
                      <Link to="/desserts" className="dropdown-item">🍰 Desserts</Link>
                    </li>
                  </ul>
                </li>

                {/* Cart */}
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    🛒 Cart {cartCount}
                  </Link>
                </li>

                {/* Orders */}
                <li className="nav-item">
                  <Link to="/orders" className="nav-link">📦 Orders</Link>
                </li>

                {/* About Us */}
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">ℹ️ AboutUs</Link>
                </li>

                {/* Contact Us */}
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">📞 ContactUs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/*" element={<FileNotFound />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

// ✅ Wrap App with BrowserRouter in main.jsx / index.js, not inside App
export default App;
