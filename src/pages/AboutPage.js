import React from "react";
import {
  FaBullseye,
  FaEye,
  FaBalanceScale,
  FaShieldAlt,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

const AboutPage = () => {
  const styles = {
    wrapper: {
      backgroundColor: "#fdfcf7",
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "#1a1a1a",
      margin: 0,
      padding: 0,
    },
    section: {
      padding: "80px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
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
    serifHeading: {
      fontFamily: "serif",
      fontSize: "48px",
      marginBottom: "24px",
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
    card: {
      flex: "1",
      minWidth: "300px",
      backgroundColor: "#f5f7f0",
      padding: "40px",
      borderRadius: "16px",
      textAlign: "left",
      border: "1px solid #ebede4",
    },
    iconBox: {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      fontSize: "24px",
    },
    storyBox: {
      backgroundColor: "#4a5d23",
      color: "#ffffff",
      padding: "60px 40px",
      borderRadius: "12px",
      textAlign: "center",
      margin: "40px 0",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      marginTop: "60px",
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
            <h2 style={{ fontFamily: "serif", fontSize: "24px" }}>
              Our Mission
            </h2>
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
            <h2 style={{ fontFamily: "serif", fontSize: "24px" }}>
              Our Vision
            </h2>
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
          <p style={{ fontSize: "18px", lineHeight: "1.8", opacity: 0.9 }}>
            Founded in 2018 by lawyers, activists, and victims, Anti Land Mafia
            grew from a small support group into a nationwide movement.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ ...styles.section, paddingTop: 0 }}>
        <h2 style={{ ...styles.serifHeading, fontSize: "36px" }}>
          Our Core Values
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              icon: <FaBalanceScale />,
              title: "Justice",
              desc: "Fair legal rights for all land owners",
            },
            {
              icon: <FaShieldAlt />,
              title: "Integrity",
              desc: "Truth and transparency in every case",
            },
            {
              icon: <FaUsers />,
              title: "Community",
              desc: "Nationwide victim support network",
            },
            {
              icon: <FaHeart />,
              title: "Compassion",
              desc: "Standing with victims empathetically",
            },
          ].map((v, i) => (
            <div key={i} style={{ ...styles.card, textAlign: "center" }}>
              <div
                style={{
                  ...styles.iconBox,
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                  backgroundColor: "#e3e8d8",
                  color: "#4a5d23",
                  fontSize: "26px",
                }}
              >
                {v.icon}
              </div>
              <h3 style={{ fontFamily: "serif" }}>{v.title}</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={styles.statsGrid}>
          {[
            { num: "5,000+", label: "Families Helped" },
            { num: "500+", label: "Cases Filed" },
            { num: "50+", label: "Legal Guides" },
            { num: "10+", label: "States Covered" },
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <span style={styles.statNumber}>{s.num}</span>
              <span style={{ fontSize: "14px", color: "#666" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default AboutPage;
