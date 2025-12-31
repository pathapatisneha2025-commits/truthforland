import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ close menu on link click (mobile)
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          
          {/* Left: Logo + Text */}
          <div className="brand">
            <img src="/companylogo.png" alt="Anti Land Mafia" />
            <div className="brand-text">
              <h3>Anti Land Mafia</h3>
              <p>Justice for Land Rights</p>
            </div>
          </div>

          {/* Center: Links */}
          <ul className={`menu ${open ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
            </li>
            <li>
              <Link to="/resource" onClick={handleLinkClick}>Resources</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>

            {/* Mobile only button */}
            <li className="mobile-only">
              <button
                className="help-btn"
                onClick={handleLinkClick}
              >
                Get Help
              </button>
            </li>
          </ul>

          {/* Right */}
          <div className="right">
            <span className="search">🔍</span>
            <button className="help-btn desktop-only">Get Help</button>

            <div
              className="hamburger"
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

     


      {/* CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        .navbar {
          background: #f8f6f0;
          border-bottom: 1px solid #ddd;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-inner {
          max-width: 1300px;
          margin: auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand img {
          width: 75px;
          height: 75px;
          object-fit: cover;
          border-radius: 50%;
        }

        .brand-text h3 {
          color: #3b4a1f;
          font-size: 18px;
        }

        .brand-text p {
          font-size: 12px;
          color: #7a7a7a;
        }

        .menu {
          list-style: none;
          display: flex;
          gap: 28px;
        }

        .menu a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }

        .menu a.active {
          font-weight: 600;
        }

        .menu a:hover {
          color: #6b7d2c;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .search {
          font-size: 18px;
          cursor: pointer;
        }

        .help-btn {
          background: #6b7d2c;
          color: #fff;
          border: none;
          padding: 8px 18px;
          border-radius: 22px;
          cursor: pointer;
          font-size: 14px;
        }

        .help-btn:hover {
          background: #55621f;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .hamburger span {
          width: 24px;
          height: 3px;
          background: #333;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 900px) {
          .menu {
            position: absolute;
            top: 72px;
            left: 0;
            width: 100%;
            background: #f8f6f0;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            display: none;
          }

          .menu.open {
            display: flex;
          }

          .hamburger {
            display: flex;
          }

          .desktop-only {
            display: none;
          }

          .mobile-only {
            display: block;
          }

          .brand img {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}
