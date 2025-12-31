import React from 'react';

const BlogPage = () => {
  const styles = {
    container: {
      backgroundColor: '#fdfcf7',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#1a1a1a',
      padding: '40px 0',
    },
    section: {
      padding: '60px 5%',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    centered: {
      textAlign: 'center',
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
      margin: '0 auto 40px auto',
      lineHeight: '1.6',
    },
    // Category Cards (Top Section)
    categoryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
      marginBottom: '80px',
    },
    catCard: {
      height: '380px',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '30px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: 'none',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8) 100%)',
      zIndex: 1,
    },
    catContent: {
      position: 'relative',
      zIndex: 2,
      color: 'white',
    },
    tag: {
      backgroundColor: '#c0841d',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginBottom: '12px',
      display: 'inline-block',
    },
    // Search Bar
    searchWrapper: {
      maxWidth: '650px',
      margin: '0 auto 80px auto',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '18px 30px',
      paddingLeft: '55px',
      borderRadius: '50px',
      border: '1px solid #e0e0d5',
      fontSize: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      outline: 'none',
    },
    searchBtn: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#4a5d23',
      color: 'white',
      border: 'none',
      padding: '10px 25px',
      borderRadius: '40px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    // Article Feed
    articleGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
    },
    articleCard: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid #ebede4',
      transition: 'transform 0.3s ease',
    },
    articleBody: {
      padding: '25px',
      textAlign: 'left',
    },
    meta: {
      fontSize: '13px',
      color: '#888',
      display: 'flex',
      gap: '15px',
      marginBottom: '12px',
    },
    readMore: {
      color: '#4a5d23',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '14px',
      display: 'inline-block',
      marginTop: '15px',
    }
  };

  const categories = [
    { title: 'Land Fraud & Mafia Exposés', count: '24 Articles', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800' },
    { title: 'Legal Awareness & Land Laws', count: '18 Articles', img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800' },
    { title: 'Victim Voices & Community', count: '15 Articles', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800' }
  ];

  return (
    <div style={styles.container}>
      {/* Categories Section */}
      <section style={styles.section}>
        <div style={styles.centered}>
          <div style={styles.badge}>Explore Our Categories</div>
          <h1 style={styles.serifHeading}>Stories That Matter</h1>
          <p style={styles.subtext}>
            Dive into our comprehensive collection of articles, investigations, 
            and resources fighting for land rights.
          </p>
        </div>

        <div style={styles.categoryGrid}>
          {categories.map((cat, i) => (
            <div key={i} style={{...styles.catCard, backgroundImage: `url(${cat.img})`}}>
              <div style={styles.overlay}></div>
              <div style={styles.catContent}>
                <span style={styles.tag}>{cat.count}</span>
                <h3 style={{fontSize: '24px', margin: 0, lineHeight: '1.2'}}>{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Feed Section */}
      <section style={{...styles.section, backgroundColor: '#f9f9f2', maxWidth: '100%'}}>
        <div style={{...styles.centered, maxWidth: '1200px', margin: '0 auto'}}>
          <div style={styles.badge}>Latest Updates</div>
          <h2 style={styles.serifHeading}>Recent Stories & Articles</h2>
          <p style={styles.subtext}>
            Stay informed with the latest investigations, legal updates, and community victories.
          </p>

          <div style={styles.searchWrapper}>
            <span style={{position: 'absolute', left: '22px', top: '18px', fontSize: '18px'}}>🔍</span>
            <input 
              type="text" 
              placeholder="Search blogs & resources..." 
              style={styles.searchInput} 
            />
            <button style={styles.searchBtn}>Search</button>
          </div>

          <div style={styles.articleGrid}>
            <div style={styles.articleCard}>
              <div style={{height: '200px', backgroundColor: '#e3e8d8', backgroundImage: 'url(https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=800)', backgroundSize: 'cover'}}></div>
              <div style={styles.articleBody}>
                <span style={{...styles.badge, fontSize: '10px'}}>Legal Guide</span>
                <h3 style={{fontFamily: 'serif', fontSize: '22px', margin: '10px 0'}}>Step-by-Step: Filing a Land Dispute Complaint</h3>
                <div style={styles.meta}>
                  <span>📅 Dec 20, 2024</span>
                  <span>⏱️ 4 min read</span>
                </div>
                <p style={{color: '#666', fontSize: '14px', lineHeight: '1.5'}}>
                  Practical guide on filing complaints with the revenue department 
                  and approaching the courts for land disputes.
                </p>
                <a href="#" style={styles.readMore}>Read Full Story →</a>
              </div>
            </div>

            <div style={styles.articleCard}>
              <div style={{height: '200px', backgroundColor: '#e3e8d8', backgroundImage: 'url(https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800)', backgroundSize: 'cover'}}></div>
              <div style={styles.articleBody}>
                <span style={{...styles.badge, fontSize: '10px'}}>Success Story</span>
                <h3 style={{fontFamily: 'serif', fontSize: '22px', margin: '10px 0'}}>Victory: Community Wins Back 100 Acres After 5-Year Battle</h3>
                <div style={styles.meta}>
                  <span>📅 Dec 22, 2024</span>
                  <span>⏱️ 6 min read</span>
                </div>
                <p style={{color: '#666', fontSize: '14px', lineHeight: '1.5'}}>
                  How organized resistance and legal action helped a village 
                  reclaim their agricultural land from encroachers.
                </p>
                <a href="#" style={styles.readMore}>Read Full Story →</a>
              </div>
            </div>
          </div>

          <div style={{marginTop: '60px'}}>
             <a href="#" style={{...styles.readMore, fontSize: '16px', borderBottom: '2px solid #4a5d23'}}>View All Articles →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;