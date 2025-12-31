import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          {/* Logo Badge */}
          <div className="hero-logo">
            <img
              src="/companylogo.png"
              alt="Anti Land Mafia"
            />
          </div>

          <h1>Anti Land Mafia</h1>
          <h2>Justice for Land Rights</h2>

          <p>
            Raising our voice against illegal land grabbing and supporting
            victims through awareness, legal knowledge, and truth.
          </p>

         <div className="hero-buttons">
  <button
    className="primary-btn"
    onClick={() => navigate("/blog")}
  >
    Read Latest Stories →
  </button>

  <button
    className="secondary-btn"
    onClick={() => navigate("/resource")}
  >
    ⬇ Download Legal Resources
  </button>
</div>

        </div>
      </section>

      {/* CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        .hero {
          position: relative;
          min-height: 85vh;
          background: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee")
            center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(63, 78, 25, 0.75);
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          padding: 20px;
          z-index: 2;
        }

        .hero-logo img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        
          padding: 10px;
          margin-bottom: 30px;
        }

        .hero h1 {
          font-size: 56px;
          font-family: Georgia, serif;
          margin-bottom: 10px;
        }

        .hero h2 {
          font-size: 26px;
          color: #d2a03a;
          margin-bottom: 25px;
          font-weight: 600;
        }

        .hero p {
          font-size: 18px;
          line-height: 1.6;
          color: #f0f0f0;
          margin-bottom: 40px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: #d2a03a;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .primary-btn:hover {
          background: #b88b2f;
        }

        .secondary-btn {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.15);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 38px;
          }

          .hero h2 {
            font-size: 20px;
          }

          .hero p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
