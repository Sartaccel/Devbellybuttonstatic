import React, { useEffect } from "react";
import bellylogo from "../../Images/bellylogo.jpeg";
import "./Navbar.css";

function Navbar() {
  const closeNavbar = () => {
    const navbar = document.getElementById("mainNavbar");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const handleScroll = () => {
      let scrollPosition = window.scrollY + 120; // offset for sticky navbar

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.dataset.section === sectionId) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand" href="#hero">
          <img src={bellylogo} alt="Belly Button" width="100" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 text-center">
  <li className="nav-item">
    <a className="nav-link" href="#product" data-section="product" onClick={closeNavbar}>
      Product
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#why-us" data-section="why-us" onClick={closeNavbar}>
      Why Us
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#how-it-works" data-section="how-it-works" onClick={closeNavbar}>
      How It Works
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#stories" data-section="stories" onClick={closeNavbar}>
      Stories
    </a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#support" data-section="support" onClick={closeNavbar}>
      Support
    </a>
  </li>

  
</ul>


          {/* Right Button */}
          <div className="d-flex justify-content-center">
            <a href="#get-started" className="btn btn-primary px-4 rounded-pill" onClick={closeNavbar}>
              Get the App
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
