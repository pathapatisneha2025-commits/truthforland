import React from 'react';

const ContactPage = () => {
  return (
    <main className="contact-page">
      {/* 1. Header Section */}
      <section className="contact-header">
        <span className="contact-label">Contact Us</span>
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          Have questions about land rights? Need legal guidance? Or want to report land fraud? 
          Reach out to us — we're here to help.
        </p>
      </section>

      {/* 2. Main Content Grid */}
      <div className="contact-grid">
        
        {/* Left Side: Message Form */}
        <section className="form-card">
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

            <div className="field">
              <label>Your Message *</label>
              <textarea 
                placeholder="Describe your issue or question in detail..." 
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <span className="icon-arrow">➤</span> Send Message
            </button>
          </form>
        </section>

        {/* Right Side: Contact Info & Emergency Helpline */}
        <aside className="contact-sidebar">
          
          {/* Info Card: Call Us */}
          <div className="info-card">
            <div className="icon-box">📞</div>
            <div className="info-text">
              <h3>Call Us</h3>
              <p className="primary-text">+91 98765 43210</p>
              <p className="secondary-text">Mon-Sat, 9am-6pm IST</p>
            </div>
          </div>

          {/* Info Card: Visit Us */}
          <div className="info-card">
            <div className="icon-box">📍</div>
            <div className="info-text">
              <h3>Visit Us</h3>
              <p className="primary-text">New Delhi, India</p>
              <p className="secondary-text">By appointment only</p>
            </div>
          </div>

          {/* Emergency Helpline Section (from Screenshot 1) */}
          <div className="emergency-alert-card">
            <h3>Need Urgent Help?</h3>
            <p>If you're facing immediate land grabbing threats, call our emergency helpline.</p>
            <div className="emergency-phone-box">
              <span className="phone-icon">📞</span> +91 98765 43210
            </div>
          </div>

        </aside>
      </div>

      {/* 3. Bottom Quote Section */}
      <section className="quote-banner">
        <p>"Justice delayed is justice denied. Stand for land rights."</p>
      </section>

      <style jsx>{`
        .contact-page {
          background-color: #f6f5ef;
          padding: 80px 20px;
          font-family: 'Inter', sans-serif;
        }

        /* Header Styles */
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
          margin: 20px 0;
          font-family: serif;
          color: #1a1a1a;
        }
        .contact-description {
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Grid Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Form Card */
        .form-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 16px;
          border: 1px solid #eee;
        }
        .section-heading {
          font-family: serif;
          font-size: 24px;
          margin-bottom: 30px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        label { font-size: 14px; font-weight: 600; }
        input, textarea {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fafafa;
        }
        .submit-button {
          background-color: #4b5934;
          color: white;
          border: none;
          padding: 14px 25px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Sidebar & Info Cards */
        .contact-sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-card {
          background: #fff;
          padding: 25px;
          border-radius: 16px;
          display: flex;
          gap: 15px;
          align-items: center;
          border: 1px solid #eee;
        }
        .icon-box {
          background: #e9ece0;
          width: 45px;
          height: 45px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4b5934;
        }
        .primary-text { font-weight: 700; margin: 4px 0; }
        .secondary-text { font-size: 13px; color: #777; margin: 0; }

        /* Emergency Card Styling (Golden) */
        .emergency-alert-card {
          background-color: #c99a2e;
          color: white;
          padding: 30px;
          border-radius: 16px;
        }
        .emergency-alert-card h3 { margin-top: 0; font-family: serif; }
        .emergency-phone-box {
          background: rgba(255,255,255,0.2);
          padding: 12px;
          border-radius: 8px;
          text-align: center;
          font-weight: 700;
          margin-top: 15px;
        }

        /* Bottom Banner */
        .quote-banner {
          margin-top: 80px;
          background-color: #c99a2e;
          padding: 40px;
          text-align: center;
          color: white;
          font-style: italic;
          font-size: 1.8rem;
          font-family: serif;
        }

        @media (max-width: 850px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
};

export default ContactPage;