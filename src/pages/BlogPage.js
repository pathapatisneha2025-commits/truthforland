import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://truthforlanddatabase.onrender.com/blogs";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/all`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ BUILD CATEGORIES FROM API (AUTO COUNT)
  const categories = useMemo(() => {
    const map = {};

    posts.forEach(post => {
      const cat = post.category || "Uncategorized";

      if (!map[cat]) {
        map[cat] = {
          title: cat,
          count: 0,
          img: post.image_url || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600",
        };
      }

      map[cat].count += 1;
    });

    return Object.values(map);
  }, [posts]);

  const styles = {
    container: {
      backgroundColor: '#fdfcf7',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#1a1a1a',
      padding: '80px 5%',
    },
    centeredHeader: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    badge: {
      backgroundColor: '#e3e8d8',
      color: '#4a5d23',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      display: 'inline-block',
      marginBottom: '15px',
    },
    serifHeading: {
      fontFamily: 'serif',
      fontSize: '42px',
      margin: '0 0 20px 0',
    },
    subtext: {
      color: '#666',
      fontSize: '18px',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    categoryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '100px',
    },
    catCard: {
      height: '350px',
      borderRadius: '20px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '30px',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8))',
    },
    catContent: {
      position: 'relative',
      color: '#fff',
    },
    articleCount: {
      backgroundColor: '#c0841d',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginBottom: '10px',
      display: 'inline-block',
    },
    searchContainer: {
      maxWidth: '600px',
      margin: '0 auto 40px',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '16px 25px 16px 50px',
      borderRadius: '40px',
      border: '1px solid #ddd',
      fontSize: '16px',
      outline: 'none',
    },
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    blogCard: {
      backgroundColor: '#f5f7f0',
      borderRadius: '16px',
      padding: '30px',
      border: '1px solid #ebede4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    meta: {
      display: 'flex',
      gap: '15px',
      fontSize: '13px',
      color: '#888',
      marginBottom: '15px',
    },
  };

  // ✅ FILTER POSTS
  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;

    const matchesSearch =
      (post.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.type || '').toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={styles.container}>
      <header style={styles.centeredHeader}>
        <div style={styles.badge}>Explore Our Categories</div>
        <h1 style={styles.serifHeading}>Stories That Matter</h1>
        <p style={styles.subtext}>
          Dive into investigations, legal awareness, and community victories.
        </p>
      </header>

      {/* CATEGORY CARDS (FROM API) */}
      <div style={styles.categoryGrid}>
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => setActiveCategory(cat.title)}
            style={{
              ...styles.catCard,
              backgroundImage: `url(${cat.img})`,
              backgroundSize: 'cover',
              cursor: 'pointer',
            }}
          >
            <div style={styles.overlay} />
            <div style={styles.catContent}>
              <span style={styles.articleCount}>
                {cat.count} Articles
              </span>
              <h3>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* FILTER BUTTONS */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
        {['All', ...categories.map(c => c.title)].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: activeCategory === cat ? 'none' : '1px solid #ddd',
              background: activeCategory === cat ? '#4a5d23' : '#f5f7f0',
              color: activeCategory === cat ? '#fff' : '#333',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <div style={styles.searchContainer}>
        <span style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }}>🔍</span>
        <input
          type="text"
          placeholder="Search blogs & resources..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* BLOG GRID */}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading blogs...</p>
      ) : (
        <div style={styles.blogGrid}>
          {filteredPosts.map((post, i) => (
            <div key={i} style={styles.blogCard}>
              <img
                src={post.image_url}
                alt={post.title}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '15px',
                }}
              />

              <div>
                <span style={{ ...styles.badge, backgroundColor: '#eee', color: '#666' }}>
                  {post.type}
                </span>

                <h3 style={{ fontFamily: 'serif', margin: '15px 0' }}>
                  {post.title}
                </h3>
              </div>

              <div>
                <div style={styles.meta}>
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.read_time}</span>
                </div>

              <Link to={`/blog/${post.id}`}>
  Read Full Story →
</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;