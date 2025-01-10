import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import TodayDeals from "./Pages/TodayDeals/TodayDeals";
import Footer from "./Components/Footer/Footer";
import DiamondRing from "./Products/DiamondRing";
import Shipping from "./Pages/Shipping/Shipping";
import PaymentMethod from "./Pages/PaymentMethod/PaymentMethod";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todaydeals" element={<TodayDeals />} />
        <Route path="/product/:id" element={<DiamondRing />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="paymentmethod" element={<PaymentMethod />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
