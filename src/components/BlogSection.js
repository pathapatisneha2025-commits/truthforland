import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const styles = {
    container: {
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: { textAlign: 'center', marginBottom: '30px' },
    upperTitle: {
      color: '#B5A46D',
      fontSize: '14px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '10px'
    },
    mainHeading: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#2D5A43',
      margin: '0 0 15px 0'
    },
    subtext: {
      color: '#666',
      fontSize: '15px',
      lineHeight: '1.5',
      maxWidth: '500px',
      margin: '0 auto 30px auto'
    },
    filterContainer: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '20px'
    },
    filterBtn: (isActive) => ({
      padding: '8px 18px',
      borderRadius: '25px',
      border: '1px solid #E0E0E0',
      backgroundColor: isActive ? '#2D5A43' : '#F9FBF9',
      color: isActive ? '#fff' : '#666',
      fontSize: '13px',
      cursor: 'pointer'
    }),
    searchBar: {
      display: 'block',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto 30px auto',
      padding: '10px 15px',
      fontSize: '14px',
      borderRadius: '25px',
      border: '1px solid #ccc'
    },
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column'
    },
    imageWrapper: {
      position: 'relative',
      height: '220px'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    floatingBadge: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      backgroundColor: '#FFB800',
      color: '#fff',
      padding: '4px 12px',
      borderRadius: '15px',
      fontSize: '11px',
      fontWeight: 'bold'
    },
    contentArea: { padding: '15px 5px' },
    metaInfo: {
      display: 'flex',
      gap: '15px',
      fontSize: '12px',
      color: '#999',
      marginBottom: '10px'
    },
    cardTitle: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '10px'
    },
    cardDesc: {
      fontSize: '14px',
      color: '#777',
      marginBottom: '15px'
    },
    readMore: {
      color: '#2D5A43',
      fontWeight: 'bold',
      fontSize: '14px'
    }
  };

  const categories = ['All', 'Land Rights', 'Investigations', 'Legal', 'Community'];

  // ================= FETCH API =================
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://truthforlanddatabase.onrender.com/blogs/all");
        const data = await res.json();
        setPosts(data || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ================= STRIP HTML =================
  const stripHTML = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html || "";
    return tmp.textContent || tmp.innerText || "";
  };

  // ================= FILTER =================
  const filteredPosts = posts.filter(post => {
    const query = searchQuery.toLowerCase();

    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;

    const matchesSearch =
      !query ||
      post.title?.toLowerCase().includes(query) ||
      post.category?.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.upperTitle}>Our Blog</div>
        <h1 style={styles.mainHeading}>Latest News & Insights</h1>
        <p style={styles.subtext}>
          Stay informed about land rights, fraud prevention, and community victories.
        </p>
      </header>

      {/* FILTERS */}
      <div style={styles.filterContainer}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={styles.filterBtn(activeCategory === cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />

      {/* LOADING */}
      {loading && <p style={{ textAlign: 'center' }}>Loading blogs...</p>}

      {/* BLOG GRID */}
      <div style={styles.blogGrid}>
        {filteredPosts.map(post => (
          <div key={post.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={post.image_url} alt={post.title} style={styles.cardImage} />
              <div style={styles.floatingBadge}>{post.category}</div>
            </div>

            <div style={styles.contentArea}>
              <div style={styles.metaInfo}>
                <span>🗓 {post.date}</span>
                <span>⏱ {post.read_time}</span>
              </div>

              <h3 style={styles.cardTitle}>{post.title}</h3>

              {/* <p style={styles.cardDesc}>
                {stripHTML(post.content).slice(0, 120)}...
              </p> */}

              <Link to={`/blog/${post.id}`} style={styles.readMore}>
                Read Article ↗
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;