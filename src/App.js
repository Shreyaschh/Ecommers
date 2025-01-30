import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";
import UserLoginForm from "./components/UserLoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Administration from "./components/Administration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userlogin" element={<UserLoginForm />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/administration" element={<Administration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
