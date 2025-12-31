import React from 'react';

const BlogSection = () => {
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
    // Category Cards
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
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '30px',
      cursor: 'pointer',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)',
      zIndex: 1,
    },
    catContent: {
      position: 'relative',
      zIndex: 2,
      color: 'white',
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
    // Search Bar
    searchContainer: {
      maxWidth: '600px',
      margin: '0 auto 60px auto',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    searchInput: {
      width: '100%',
      padding: '16px 25px',
      paddingLeft: '50px',
      borderRadius: '40px',
      border: '1px solid #ddd',
      fontSize: '16px',
      outline: 'none',
      backgroundColor: 'white',
    },
    searchBtn: {
      position: 'absolute',
      right: '8px',
      backgroundColor: '#4a5d23',
      color: 'white',
      border: 'none',
      padding: '10px 25px',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    // Blog Grid
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
    },
    blogCard: {
      backgroundColor: '#f5f7f0',
      borderRadius: '16px',
      padding: '30px',
      textAlign: 'left',
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
    }
  };

  const categories = [
    { title: 'Land Fraud & Mafia Exposés', count: '24 Articles', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600' },
    { title: 'Legal Awareness & Land Laws', count: '18 Articles', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600' },
    { title: 'Victim Voices & Community Support', count: '15 Articles', img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600' }
  ];

  const recentPosts = [
    { type: 'Legal Guide', title: 'Step-by-Step: Filing a Land Dispute Complaint', date: 'Dec 20, 2024', read: '4 min read' },
    { type: 'Victim Voice', title: 'Interview: Survivor Speaks About 10-Year Land Battle', date: 'Dec 18, 2024', read: '7 min read' },
    { type: 'Success Story', title: 'Victory: Community Wins Back 100 Acres After 5-Year Battle', date: 'Dec 22, 2024', read: '6 min read' }
  ];

  return (
    <div style={styles.container}>
      {/* 1. Category Grid Section */}
      <header style={styles.centeredHeader}>
        <div style={styles.badge}>Explore Our Categories</div>
        <h1 style={styles.serifHeading}>Stories That Matter</h1>
        <p style={styles.subtext}>Dive into our comprehensive collection of articles, investigations, and resources fighting for land rights.</p>
      </header>

      <div style={styles.categoryGrid}>
        {categories.map((cat, i) => (
          <div key={i} style={{...styles.catCard, backgroundImage: `url(${cat.img})`, backgroundSize: 'cover'}}>
            <div style={styles.overlay}></div>
            <div style={styles.catContent}>
              <span style={styles.articleCount}>{cat.count}</span>
              <h3 style={{fontSize: '22px', fontWeight: 'bold'}}>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Recent Articles & Search Section */}
      <div style={styles.centeredHeader}>
        <div style={styles.badge}>Latest Updates</div>
        <h2 style={styles.serifHeading}>Recent Stories & Articles</h2>
        <p style={{...styles.subtext, marginBottom: '40px'}}>Stay informed with the latest investigations, legal updates, and community victories.</p>
        
        <div style={styles.searchContainer}>
          <span style={{position: 'absolute', left: '20px', color: '#999'}}>🔍</span>
          <input type="text" placeholder="Search blogs & resources..." style={styles.searchInput} />
          <button style={styles.searchBtn}>Search</button>
        </div>
      </div>

      <div style={styles.blogGrid}>
        {recentPosts.map((post, i) => (
          <div key={i} style={styles.blogCard}>
            <div>
              <span style={{...styles.badge, backgroundColor: '#eee', color: '#666', marginBottom: '10px'}}>{post.type}</span>
              <h3 style={{fontFamily: 'serif', fontSize: '24px', marginBottom: '15px', lineHeight: '1.3'}}>{post.title}</h3>
              <p style={{color: '#666', fontSize: '14px', marginBottom: '20px'}}>Practical guide on filing complaints with the revenue department and approaching the courts...</p>
            </div>
            <div>
              <div style={styles.meta}>
                <span>📅 {post.date}</span>
                <span>⏱️ {post.read}</span>
              </div>
              <a href="#" style={{color: '#4a5d23', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px'}}>Read Full Story →</a>
            </div>
          </div>
        ))}
      </div>

      <div style={{textAlign: 'center', marginTop: '60px'}}>
        <a href="#" style={{color: '#4a5d23', fontWeight: 'bold', textDecoration: 'none'}}>View All Articles →</a>
      </div>
    </div>
  );
};

export default BlogSection;