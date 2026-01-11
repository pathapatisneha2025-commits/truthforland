import React from "react";
import { useNavigate } from "react-router-dom";

const BlogDetailPage = ({ blog }) => {
      const navigate = useNavigate();

  const styles = {
    container: {
      padding: "80px 8%",
      fontFamily: "system-ui, -apple-system, sans-serif",
      backgroundColor: "#fdfcf7",
      color: "#1a1a1a",
      lineHeight: "1.9",
    },
    backBtn: {
      background: "none",
      border: "none",
      color: "#4a5d23",
      fontWeight: "700",
      cursor: "pointer",
      marginBottom: "30px",
      fontSize: "15px",
    },
    heroImage: {
      width: "100%",
      height: "420px",
      objectFit: "cover",
      borderRadius: "22px",
      marginBottom: "35px",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "#e3e8d8",
      color: "#4a5d23",
      padding: "6px 16px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "700",
      textTransform: "uppercase",
      marginBottom: "15px",
    },
    title: {
      fontFamily: "serif",
      fontSize: "44px",
      margin: "15px 0 10px",
    },
    meta: {
      color: "#777",
      fontSize: "14px",
      marginBottom: "40px",
    },
    sectionTitle: {
      fontFamily: "serif",
      fontSize: "28px",
      margin: "45px 0 15px",
    },
    paragraph: {
      fontSize: "18px",
      marginBottom: "22px",
      color: "#333",
    },
    highlight: {
      backgroundColor: "#f5f7f0",
      padding: "25px",
      borderLeft: "4px solid #4a5d23",
      borderRadius: "12px",
      margin: "40px 0",
      fontSize: "18px",
    },
    divider: {
      height: "1px",
      backgroundColor: "#e5e7db",
      margin: "60px 0",
    },
  };
  const onBack = () => {
    navigate("/"); // replace "/" with your home/blogs route if different
  };
  return (
    <div style={styles.container}>
      <button onClick={onBack} style={styles.backBtn}>
        ← Back to Blogs
      </button>

      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400"
        alt="Land Investigation"
        style={styles.heroImage}
      />

      <span style={styles.badge}>Investigations</span>

      <h1 style={styles.title}>
        Fake Power of Attorney: The Silent Weapon Used by Land Mafia
      </h1>

      <div style={styles.meta}>
        📅 Dec 26, 2024 &nbsp; | &nbsp; ⏱️ 7 min read &nbsp; | &nbsp; ✍️ Truth For Land
      </div>

      <p style={styles.paragraph}>
        Across India, thousands of landowners lose their property every year without
        ever selling it. The weapon used is rarely violence — instead, it is forged
        paperwork, fake witnesses, and a powerful legal loophole known as the
        <strong> Power of Attorney</strong>.
      </p>

      <p style={styles.paragraph}>
        Land mafias identify vulnerable properties — ancestral lands, absentee owners,
        senior citizens, or disputed plots — and quietly initiate document manipulation.
        By the time the real owner becomes aware, the land has already changed hands
        multiple times.
      </p>

      <div style={styles.highlight}>
        ⚠️ <strong>Key Insight:</strong> Most victims discover the fraud only when they
        attempt to sell, build, or verify records — often years later.
      </div>

      <h2 style={styles.sectionTitle}>How the Scam Operates</h2>

      <p style={styles.paragraph}>
        The process usually begins with forged identity proofs and fabricated Power of
        Attorney documents. These documents are registered with the help of corrupt
        intermediaries, allowing criminals to legally sell land they do not own.
      </p>

      <p style={styles.paragraph}>
        Once sold, the property is rapidly resold to multiple buyers, creating layers
        of ownership that make legal recovery extremely complex.
      </p>

      <h2 style={styles.sectionTitle}>Why Victims Struggle to Fight Back</h2>

      <p style={styles.paragraph}>
        Court cases related to land disputes often run for years. During this time,
        victims face financial pressure, intimidation, and emotional distress. Many
        are forced to abandon the fight entirely.
      </p>

      <p style={styles.paragraph}>
        Legal loopholes, slow investigations, and lack of awareness enable land mafias
        to operate almost openly in some regions.
      </p>

      <h2 style={styles.sectionTitle}>How You Can Protect Your Property</h2>

      <p style={styles.paragraph}>
        Regularly verify land records, avoid signing blank documents, and ensure all
        transactions are legally vetted. Digital land records and biometric
        registrations are improving transparency — but vigilance remains essential.
      </p>

      <div style={styles.highlight}>
        ✅ <strong>Prevention Tip:</strong> Always cross-check registration details and
        immediately challenge unauthorized entries in land records.
      </div>

      <div style={styles.divider} />

      <p style={{ fontStyle: "italic", color: "#666" }}>
        This article is part of our ongoing investigation into land fraud, legal
        loopholes, and property rights. Awareness is the first step toward justice.
      </p>
    </div>
  );
};

export default BlogDetailPage;
