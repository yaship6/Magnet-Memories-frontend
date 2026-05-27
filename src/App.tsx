import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Customize from "./pages/Customize";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import OrderFeedback from "./pages/OrderFeedback";
import SocietyStalls from "./pages/SocietyStalls";
import MagneticCursorWaves from "./components/MagneticCursorWaves";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <MagneticCursorWaves />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-feedback" element={<OrderFeedback />} />
        <Route path="/society-stalls" element={<SocietyStalls />} />
      </Routes>
    </>
  );
}

export default App;
