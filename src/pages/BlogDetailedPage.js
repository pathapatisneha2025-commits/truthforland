import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // dynamic blog id
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://truthforlanddatabase.onrender.com/blogs/${id}`
        );
        const data = await res.json();

        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

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
    sectionTitle: {
      fontFamily: "serif",
      fontSize: "28px",
      margin: "45px 0 15px",
    },
    divider: {
      height: "1px",
      backgroundColor: "#e5e7db",
      margin: "60px 0",
    },
  };

  const onBack = () => {
    navigate("/blogs");
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={styles.container}>
        <p>Blog not found</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button onClick={onBack} style={styles.backBtn}>
        ← Back to Blogs
      </button>

      <img
        src={blog.image_url}
        alt={blog.title}
        style={styles.heroImage}
      />

      <span style={styles.badge}>{blog.category}</span>

      <h1 style={styles.title}>{blog.title}</h1>

      <div style={styles.meta}>
        📅 {blog.date} &nbsp; | &nbsp; ⏱️ {blog.read_time}
      </div>

      {/* MAIN DESCRIPTION */}
      <p style={styles.paragraph}>{blog.main_description}</p>

      {/* CONTENT SECTIONS */}
      {blog.content_sections?.map((sec, index) => (
        <div key={index}>
          {sec.sectionTitle && (
            <h2 style={styles.sectionTitle}>{sec.sectionTitle}</h2>
          )}

          {sec.highlight && (
            <div style={styles.highlight}>
              <div
                dangerouslySetInnerHTML={{ __html: sec.highlight }}
              />
            </div>
          )}

          {sec.paragraph && (
            <p style={styles.paragraph}>{sec.paragraph}</p>
          )}
        </div>
      ))}

      <div style={styles.divider} />

      <p style={{ fontStyle: "italic", color: "#666" }}>
        {blog.divider}
      </p>
    </div>
  );
};

export default BlogDetailPage;