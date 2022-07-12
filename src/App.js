import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Password from "./Components/Password/Password";
import SignUp from "./Components/Sign-up/SignUp";
import SignIn from "./Components/Sign-in/SignIn";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Home from "./Components/Home/Home";
import Filter from "./Components/Filter/Filter";
import Phones from "./Components/Phones/Phones";
import Order from "./Components/Order/Order";
import Cart from "./Components/CART/Cart";
import Likes from "./Components/Likes/Likes";
import MyAccount from "./Components/MyAccount/MyAccount";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Privacy from "./Components/Privacy/Privacy";
import Faq from "./Components/FAQ/Faq";
import SliderOnlyOne from "./Components/SliderOnlyOne/SliderOnlyOne";
// import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/password" element={<Password />} />
          <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/slider" element={<SliderOnlyOne />} />
          {/*<Route path="/footer" element={<Footer/>}/>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
