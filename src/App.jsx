import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx"; // <-- This is the line that was missing!
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main Content Area pushes the footer to the bottom */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* We will add About and Contact later */}
          </Routes>
        </main>
        <WhatsAppButton /> {/* Add it right here */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;