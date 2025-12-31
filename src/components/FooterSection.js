import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="brand-logo">
<div className="logo-placeholder">
  <img src="/companylogo.png" alt="Anti Land Mafia Logo" />
</div>
            <div>
              <h3>Anti Land Mafia</h3>
              <p>Justice for Land Rights</p>
            </div>
          </div>
          <p className="brand-statement">
            A movement dedicated to fighting illegal land grabbing and empowering victims with legal knowledge and community support.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#latest">Latest Stories</a></li>
            <li><a href="#blog">Blog Categories</a></li>
            <li><a href="#resources">Legal Resources</a></li>
            <li><a href="#report">Report Land Fraud</a></li>
            <li><a href="#help">Get Legal Help</a></li>
          </ul>
        </div>

        {/* Legal Resources */}
        <div className="footer-links">
          <h4>Legal Resources</h4>
          <ul>
            <li><a href="#act">Land Acquisition Act</a></li>
            <li><a href="#rti">RTI Templates</a></li>
            <li><a href="#fir">FIR Formats</a></li>
            <li><a href="#notice">Legal Notice Samples</a></li>
            <li><a href="#rights">Know Your Rights</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><span>✉️</span> contact@antilandmafia.org</p>
            <p><span>📞</span> +91 98765 43210</p>
            <p><span>📍</span> New Delhi, India</p>
          </div>
         <div className="social-links">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label="Twitter"
  >
    <FaTwitter />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© {currentYear} Anti Land Mafia. All rights reserved. Fighting for justice.</p>
          <div className="legal-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-footer {
          background-color: #4b5934; /* Dark Forest Green from screenshot */
          color: #ffffff;
          padding: 60px 0 20px 0;
          font-family: 'Inter', sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1fr;
          gap: 40px;
          padding: 0 40px;
          margin-bottom: 60px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .logo-placeholder {
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .brand-logo h3 {
          margin: 0;
          font-size: 1.2rem;
          font-family: serif;
        }

        .brand-logo p {
          margin: 0;
          font-size: 0.8rem;
          opacity: 0.8;
        }
.logo-placeholder {
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* or cover if you want fill */
}

        .brand-statement {
          font-size: 0.9rem;
          line-height: 1.6;
          opacity: 0.9;
          max-width: 300px;
        }

        h4 {
          font-size: 1.1rem;
          margin-bottom: 25px;
          font-family: serif;
          position: relative;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        ul li {
          margin-bottom: 12px;
        }

        ul li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        ul li a:hover {
          opacity: 1;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          margin-bottom: 15px;
          opacity: 0.9;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          font-size: 14px;
          transition: background 0.2s;
        }

        .social-icon:hover {
          background: rgba(255,255,255,0.1);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          margin: 0 40px;
        }

        .bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          opacity: 0.6;
        }

        .legal-bottom-links {
          display: flex;
          gap: 20px;
        }

        .legal-bottom-links a {
          color: white;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
          .bottom-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;