import React from "react";
import "./Footer.css";
import footlogo from "../../Images/footlogo.png";

function Footer() {
  return (
    <footer className="footer-dark pt-5">
      <div className="container">
        <div className="row gy-4">
          {/* 1️⃣ Logo + Content */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo d-flex align-items-center mb-3">
              <img src={footlogo} alt="Belly Button" className="me-2" />
            </div>
            <p className="footer-text">
              Moments happen once. Memories grow when shared together.
            </p>
          </div>

          {/* 2️⃣ Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#product">About</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Term of Service</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* 3️⃣ Contact */}
          <div className="col-lg-3 col-md-6">
            <h6 className="footer-title">Contact</h6>
            <ul className="list-unstyled footer-text">
              <li>
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:support@bellybutton.global">
                  support@bellybutton.global
                </a>
              </li>
              <li className="mt-2">
                <i className="fas fa-phone me-2"></i>
                <a href="tel:+14048230257">(404) 823-0257</a>
              </li>
            </ul>
          </div>

          {/* 4️⃣ Follow Us */}
          <div className="col-lg-2 col-md-6">
            <h6 className="footer-title">Follow Us</h6>
            <div className="d-flex gap-3 footer-social">
              <a
                href="https://www.facebook.com/share/1AYB2mK4JE/"
                aria-label="Facebook"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/bellybutton.global?igsh=MWd0NTA0MnRmaHM4dg=="
                aria-label="Instagram"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://x.com/AppBelly75502"
                aria-label="Twitter"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bellybutton/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom text-center mt-4 pt-3">
          © {new Date().getFullYear()} BellyButton. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
