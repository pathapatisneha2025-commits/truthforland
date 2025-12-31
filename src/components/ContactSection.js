import React from 'react';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Header Section */}
      <div className="contact-header">
        <span className="contact-label">Contact Us</span>
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          Have questions about land rights? Need legal guidance? Or want to report land fraud? 
          Reach out to us — we're here to help.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Form */}
        <div className="contact-card form-section">
          <h2 className="section-heading">Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="field">
                <label>Full Name *</label>
                <input type="text" placeholder="Your full name" required />
              </div>
              <div className="field">
                <label>Email Address *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="field">
                <label>Subject *</label>
                <input type="text" placeholder="How can we help?" required />
              </div>
            </div>

            <div className="field full-width">
              <label>Your Message *</label>
              <textarea 
                placeholder="Describe your issue or question in detail..." 
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <span className="btn-icon">➤</span> Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info Column */}
        <div className="contact-info-column">
          <div className="contact-card info-item">
            <div className="icon-box">📞</div>
            <div className="info-text">
              <h3>Call Us</h3>
              <p className="primary-info">+91 98765 43210</p>
              <p className="secondary-info">Mon-Sat, 9am-6pm IST</p>
            </div>
          </div>

          <div className="contact-card info-item">
            <div className="icon-box">📍</div>
            <div className="info-text">
              <h3>Visit Us</h3>
              <p className="primary-info">New Delhi, India</p>
              <p className="secondary-info">By appointment only</p>
            </div>
          </div>

          <div className="contact-card info-item">
            <div className="icon-box">🕒</div>
            <div className="info-text">
              <h3>Response Time</h3>
              <p className="primary-info">24-48 Hours</p>
              <p className="secondary-info">We respond quickly</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-wrapper {
          padding: 80px 40px;
          background-color: #f6f5ef;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-label {
          background-color: #e5e8d6;
          color: #4b5934;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .contact-title {
          font-size: 48px;
          color: #1a1a1a;
          margin: 20px 0;
          font-family: serif;
        }

        .contact-description {
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 40px;
          border: 1px solid #f0f0e8;
        }

        .section-heading {
          font-size: 24px;
          margin-bottom: 30px;
          font-family: serif;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        input, textarea {
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background-color: #fafafa;
          font-size: 16px;
          font-family: inherit;
        }

        textarea {
          resize: vertical;
        }

        .submit-button {
          background-color: #4b5934; 
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }

        .btn-icon {
          font-size: 12px;
          transform: rotate(-45deg);
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 25px;
        }

        .icon-box {
          font-size: 20px;
          background: #e9ece0;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #4b5934;
        }

        .info-text h3 {
          margin: 0 0 5px 0;
          font-size: 18px;
          font-family: serif;
        }

        .primary-info {
          font-weight: 700;
          color: #1a1a1a;
          margin: 2px 0;
        }

        .secondary-info {
          color: #777;
          font-size: 14px;
          margin: 0;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .contact-wrapper { padding: 40px 20px; }
        }
      `}</style>
    </div>
  );
};

export default Contact;