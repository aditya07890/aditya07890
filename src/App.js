import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Home from "./components/home";
import Functiondemo from "./components/funtdemo";
import Functiondemo1 from "./components/funtdemo1";
import PageNotFound from "./components/pagenotfound";
import Demo from "./components/fundemo2";
import Clicked from "./components/fundemo3";
import ArrayDemo from "./components/arrayde";
import Amazon from "./components/amazon";
import UseStateDemo from "./components/usestate";
import Counter from "./conut";
import Counters from "./components/counter";
import ImageGallery from "./components/ImageGallery";
import Imageslider from "./components/use-effact";
import Footer from "./components/footer";
import InteriorDesign from "./components/web/Interior Design";
import FormDemo from "./components/from";
import ProductOrderForm from "./components/ProductForm";
import FornHandling from "./components/fromhandling";
import SRegistrationForm from "./components/registerfrom";
import DRegistrationForm from "./components/form2";
import BRArchitects from "./components/brachride";
import SignUp from "./components/fromika";
import Products from "./components/apifetch";
import UserName from "./components/Apifatch2";
import SignUpa from "./components/Authentication/SignUp";
import Register from "./components/Authentication/Register";
import SignIn1 from "./components/Authentication/SignIn";
import Login from "./components/Authentication/login";
import Profile from "./components/Authentication/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/functiondemo" element={<Functiondemo />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/functiondemo1" element={<Functiondemo1 />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/click" element={<Clicked />} />
        <Route path="Arraydemo" element={<ArrayDemo />} />
        <Route path="/amazonTv" element={<Amazon />} />
        <Route path="/use-state" element={<UseStateDemo />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/imagegallery" element={<ImageGallery />} />
        <Route path="/use-effect" element={<Imageslider />} />
        <Route path="footer" element={<Footer />} />
        <Route path="interioir" element={<InteriorDesign />} />
        <Route path="from" element={<FormDemo />} />
        <Route path="prodactfrom" element={<ProductOrderForm />} />
        <Route path="fromhandle" element={<FornHandling />} />
        <Route path="fromreg" element={<SRegistrationForm />} />
        <Route path="fromA" element={<DRegistrationForm />} />
        <Route path="architects" element={<BRArchitects />} />
        <Route path="nameroll" element={<SignUp />} />
        <Route path="products" element={<Products />} />
        <Route path="username" element={<UserName />} />
        <Route path="Singupa" element={<SignUpa />} />
        <Route path="register" element={<Register />} />
        <Route path="/Singin1" element={<SignIn1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
