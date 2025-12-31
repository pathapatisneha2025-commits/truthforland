import React from "react";
import {
  FaBullseye,
  FaEye,
  FaBalanceScale,
  FaShieldAlt,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

const AboutSection = () => {
  const styles = {
    wrapper: {
      backgroundColor: "#fdfcf7",
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "#1a1a1a",
      paddingBottom: "80px",
    },
    section: {
      padding: "80px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    },
    serifHeading: {
      fontFamily: "serif",
      fontSize: "48px",
      marginBottom: "24px",
    },
    badge: {
      backgroundColor: "#e3e8d8",
      color: "#4a5d23",
      padding: "6px 16px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "600",
      display: "inline-block",
      marginBottom: "20px",
    },
    description: {
      maxWidth: "800px",
      margin: "0 auto 60px auto",
      lineHeight: "1.6",
      fontSize: "18px",
      color: "#555",
    },
    flexGrid: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    cssGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginTop: "40px",
    },
    card: {
      flex: "1",
      minWidth: "300px",
      backgroundColor: "#f5f7f0",
      padding: "40px",
      borderRadius: "16px",
      textAlign: "left",
      border: "1px solid #ebede4",
    },
    valueCard: {
      backgroundColor: "#f5f7f0",
      padding: "40px 20px",
      borderRadius: "16px",
      border: "1px solid #ebede4",
      textAlign: "center",
    },
    storyBox: {
      backgroundColor: "#4a5d23",
      color: "#ffffff",
      padding: "60px 40px",
      borderRadius: "12px",
      textAlign: "center",
      margin: "40px 0",
    },
    storyText: {
      fontSize: "18px",
      lineHeight: "1.8",
      maxWidth: "900px",
      margin: "0 auto 30px auto",
      opacity: "0.9",
    },
    statCard: {
      backgroundColor: "#f1f1e6",
      padding: "30px",
      borderRadius: "12px",
      textAlign: "center",
    },
    statNumber: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "#c0841d",
      display: "block",
      marginBottom: "5px",
    },
    iconBox: {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      fontSize: "26px",
    },
  };

  return (
    <div style={styles.wrapper}>
      {/* Who We Are */}
      <section style={styles.section}>
        <div style={styles.badge}>About Us</div>
        <h1 style={styles.serifHeading}>Who We Are</h1>
        <p style={styles.description}>
          Anti Land Mafia is a grassroots movement dedicated to protecting land
          rights and fighting against illegal land grabbing across India.
        </p>

        <div style={styles.flexGrid}>
          <div style={styles.card}>
            <div
              style={{
                ...styles.iconBox,
                backgroundColor: "#e9f0e6",
                color: "#4a5d23",
              }}
            >
              <FaBullseye />
            </div>
            <h2>Our Mission</h2>
            <p>
              To provide legal awareness, expose land fraud, and support victims
              through education and advocacy.
            </p>
          </div>

          <div style={styles.card}>
            <div
              style={{
                ...styles.iconBox,
                backgroundColor: "#fdf3e7",
                color: "#c0841d",
              }}
            >
              <FaEye />
            </div>
            <h2>Our Vision</h2>
            <p>
              A society where land rights are protected and land mafia activities
              are eradicated.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ ...styles.section, paddingTop: 0 }}>
        <div style={styles.storyBox}>
          <h2 style={{ ...styles.serifHeading, color: "#fff", fontSize: "36px" }}>
            Our Story
          </h2>
          <p style={styles.storyText}>
            Founded by lawyers, activists, and former victims who experienced
            illegal land grabbing firsthand.
          </p>
          <p style={styles.storyText}>
            We’ve helped thousands of families reclaim awareness and justice.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ ...styles.section, paddingTop: 0 }}>
        <h2 style={{ ...styles.serifHeading, fontSize: "36px" }}>
          Our Core Values
        </h2>

        <div style={styles.cssGrid}>
          {[
            {
              icon: <FaBalanceScale />,
              title: "Justice",
              desc: "Fighting for fair treatment and legal rights.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Integrity",
              desc: "Upholding truth and transparency.",
            },
            {
              icon: <FaUsers />,
              title: "Community",
              desc: "Building a network of support.",
            },
            {
              icon: <FaHeart />,
              title: "Compassion",
              desc: "Standing with victims with empathy.",
            },
          ].map((v, i) => (
            <div key={i} style={styles.valueCard}>
              <div
                style={{
                  ...styles.iconBox,
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                  backgroundColor: "#e3e8d8",
                }}
              >
                {v.icon}
              </div>
              <h3 style={{ fontFamily: "serif" }}>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ ...styles.cssGrid, marginTop: "60px" }}>
          {[
            { num: "5,000+", label: "Families Helped" },
            { num: "500+", label: "Cases Filed" },
            { num: "50+", label: "Legal Guides" },
            { num: "10+", label: "States Covered" },
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <span style={styles.statNumber}>{s.num}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
