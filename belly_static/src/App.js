import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Privacypolicy from './Components/Privacypolicy/Privacypolicy';



function App() {
  return (
     <Router>
      <Navbar/>

      <Routes>
        {/* Single Page */}
        <Route path="/" element={<Home />} />
         <Route path="/privacy-policy" element={<Privacypolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
