import React, { useState } from 'react';
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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

  const categories = [
    { title: 'Land Fraud & Mafia Exposés', count: '24 Articles', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600' },
    { title: 'Legal Awareness & Land Laws', count: '18 Articles', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600' },
    { title: 'Victim Voices & Community Support', count: '15 Articles', img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600' },
  ];

const recentPosts = [
  // ================= INVESTIGATIONS =================
  {
    id: 1,
    category: 'Investigations',
    type: 'Investigations',
    title: 'Community Victory: How Villages United Against Land Mafia',
    slug: 'community-victory-against-land-mafia',
    date: 'Jan 3, 2025',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800',
    content: `
      <p>For years, multiple villages suffered under illegal land grabbing.</p>
      <p>Through unity, legal awareness, and collective resistance, they reclaimed their land.</p>
      <h3>How They Won</h3>
      <ul>
        <li>Organized community meetings</li>
        <li>Verified land records</li>
        <li>Filed coordinated legal cases</li>
      </ul>
    `,
  },
  {
    id: 2,
    category: 'Investigations',
    type: 'Investigations',
    title: 'Inside the Land Scam Network Operating Across Three Districts',
    slug: 'inside-land-scam-network',
    date: 'Jan 1, 2025',
    read: '8 min read',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800',
    content: `
      <p>This investigation exposes how land scam networks operate across districts.</p>
      <p>Fake documents, political influence, and intimidation tactics are commonly used.</p>
    `,
  },
  {
    id: 3,
    category: 'Investigations',
    type: 'Investigations',
    title: 'Fake Power of Attorney: The Silent Weapon Used by Land Mafia',
    slug: 'fake-power-of-attorney-land-mafia',
    date: 'Dec 26, 2024',
    read: '7 min read',
    image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=800',
    content: `
      <p>Fake Power of Attorney documents are a silent but powerful tool.</p>
      <p>This article explains how they work and how to detect them early.</p>
    `,
  },

  // ================= LEGAL =================
  {
    id: 4,
    category: 'Legal',
    type: 'Legal',
    title: 'Understanding Property Documentation: Protect Your Land',
    slug: 'understanding-property-documentation',
    date: 'Dec 28, 2024',
    read: '8 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800',
    content: `
      <p>Property documents are your first line of defense.</p>
      <p>This guide explains sale deeds, patta, RTC, and encumbrance certificates.</p>
    `,
  },
  {
    id: 5,
    category: 'Legal',
    type: 'Legal',
    title: 'Step-by-Step Guide to Filing a Land Dispute Case in Court',
    slug: 'filing-land-dispute-case-guide',
    date: 'Dec 21, 2024',
    read: '5 min read',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800',
    content: `
      <p>Filing a land dispute can be overwhelming.</p>
      <ol>
        <li>Collect documents</li>
        <li>Consult a lawyer</li>
        <li>File the case in civil court</li>
      </ol>
    `,
  },
  {
    id: 6,
    category: 'Legal',
    type: 'Legal',
    title: 'Difference Between Patta, RTC, and Sale Deed Explained',
    slug: 'patta-rtc-sale-deed-difference',
    date: 'Dec 15, 2024',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1555375771-14b2a63968a9?q=80&w=800',
    content: `
      <p>Many landowners confuse these documents.</p>
      <p>This article clearly explains their purpose and importance.</p>
    `,
  },

  // ================= COMMUNITY =================
  {
    id: 7,
    category: 'Community',
    type: 'Community',
    title: 'Victory: Community Wins Back 100 Acres After 5-Year Battle',
    slug: 'community-wins-back-100-acres',
    date: 'Dec 22, 2024',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800',
    content: `
      <p>After five years of struggle, justice prevailed.</p>
      <p>This story shows how persistence can reclaim stolen land.</p>
    `,
  },
  {
    id: 8,
    category: 'Community',
    type: 'Community',
    title: 'How Local Youth Groups Helped Save Ancestral Farmland',
    slug: 'youth-groups-save-ancestral-farmland',
    date: 'Dec 18, 2024',
    read: '4 min read',
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=800',
    content: `
      <p>Youth volunteers played a key role in protecting farmland.</p>
      <p>Awareness campaigns and record verification made the difference.</p>
    `,
  },
  {
    id: 9,
    category: 'Community',
    type: 'Community',
    title: 'From Fear to Freedom: A Village’s Fight Against Illegal Occupation',
    slug: 'village-fight-against-illegal-occupation',
    date: 'Dec 10, 2024',
    read: '7 min read',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600',
    content: `
      <p>This village transformed fear into collective action.</p>
      <p>Legal literacy empowered residents to reclaim their rights.</p>
    `,
  },

  // ================= LAND RIGHTS =================
  {
    id: 10,
    category: 'Land Rights',
    type: 'Land Rights',
    title: 'Know Your Land Rights: What Every Property Owner Must Check',
    slug: 'know-your-land-rights',
    date: 'Jan 5, 2025',
    read: '5 min read',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800',
    content: `
      <p>Every landowner must understand their legal rights.</p>
      <p>This article explains ownership verification and legal safeguards.</p>
    `,
  },
  {
    id: 11,
    category: 'Land Rights',
    type: 'Land Rights',
    title: 'Common Tricks Used to Grab Government and Temple Lands',
    slug: 'tricks-used-to-grab-government-land',
    date: 'Dec 29, 2024',
    read: '6 min read',
    image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=800',
    content: `
      <p>Government and temple lands are frequent targets.</p>
      <p>Learn the most common fraud techniques and how to prevent them.</p>
    `,
  },
  {
    id: 12,
    category: 'Land Rights',
    type: 'Land Rights',
    title: 'How to Verify Land Records Before Buying Property',
    slug: 'verify-land-records-before-buying',
    date: 'Dec 14, 2024',
    read: '5 min read',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=800',
    content: `
      <p>Verification is the most important step before buying land.</p>
      <p>This guide walks you through official portals and documents.</p>
    `,
  },
];



  const filteredPosts = recentPosts.filter(post => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.type.toLowerCase().includes(searchQuery.toLowerCase());

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

      <div style={styles.categoryGrid}>
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{
              ...styles.catCard,
              backgroundImage: `url(${cat.img})`,
              backgroundSize: 'cover',
            }}
          >
            <div style={styles.overlay} />
            <div style={styles.catContent}>
              <span style={styles.articleCount}>{cat.count}</span>
              <h3>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* FILTER CHIPS */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
        {['All', 'Land Rights', 'Investigations', 'Legal'].map(cat => (
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
      <div style={styles.blogGrid}>
        {filteredPosts.map((post, i) => (
          <div key={i} style={styles.blogCard}>
              <img
        src={post.image}
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
                <span>⏱️ {post.read}</span>
              </div>
              <Link
  to={`/blogdetailed`}
  style={{ color: '#4a5d23', fontWeight: 'bold' }}
>
  Read Full Story →
</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
