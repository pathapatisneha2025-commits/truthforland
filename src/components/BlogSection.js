import React, { useState } from 'react';
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const styles = {
    container: { backgroundColor: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' },
    header: { textAlign: 'center', marginBottom: '30px' },
    upperTitle: { color: '#B5A46D', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' },
    mainHeading: { fontSize: '32px', fontWeight: '700', color: '#2D5A43', margin: '0 0 15px 0', lineHeight: '1.2' },
    subtext: { color: '#666', fontSize: '15px', lineHeight: '1.5', maxWidth: '500px', margin: '0 auto 30px auto' },
    filterContainer: { display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' },
    filterBtn: (isActive) => ({ padding: '8px 18px', borderRadius: '25px', border: '1px solid #E0E0E0', backgroundColor: isActive ? '#2D5A43' : '#F9FBF9', color: isActive ? '#fff' : '#666', fontSize: '13px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.3s ease' }),
    searchBar: { display: 'block', width: '100%', maxWidth: '400px', margin: '0 auto 30px auto', padding: '10px 15px', fontSize: '14px', borderRadius: '25px', border: '1px solid #ccc', outline: 'none' },
    blogGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' },
    card: { backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column' },
    imageWrapper: { position: 'relative', width: '100%', height: '220px' },
    cardImage: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' },
    floatingBadge: { position: 'absolute', top: '15px', left: '15px', backgroundColor: '#FFB800', color: '#fff', padding: '4px 12px', borderRadius: '15px', fontSize: '11px', fontWeight: 'bold' },
    contentArea: { padding: '15px 5px' },
    metaInfo: { display: 'flex', gap: '15px', fontSize: '12px', color: '#999', marginBottom: '10px', alignItems: 'center' },
    cardTitle: { fontSize: '18px', color: '#333', lineHeight: '1.4', margin: '0 0 10px 0', fontWeight: '600' },
    cardDesc: { fontSize: '14px', color: '#777', lineHeight: '1.5', marginBottom: '15px' },
    readMore: { color: '#333', fontWeight: 'bold', fontSize: '14px', textDecoration: 'underline', cursor: 'pointer' }
  };

  const categories = ['All', 'Land Rights', 'Investigations', 'Legal', 'Community'];

const blogPosts = [
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
  const stripHTML = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // ========================= FILTERED POSTS =========================
const filteredPosts = blogPosts.filter(post => {
  const query = searchQuery.toLowerCase();

  // Strict search: match only category
  const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

  const matchesSearch = !query || post.category.toLowerCase().includes(query);

  return matchesCategory && matchesSearch;
});

  // ========================= HANDLE CATEGORY CLICK =========================
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchQuery(''); // Clear search when category changes
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.upperTitle}>Our Blog</div>
        <h1 style={styles.mainHeading}>Latest News & <br />Insights</h1>
        <p style={styles.subtext}>
          Stay informed about land rights, fraud prevention, and community victories in the fight against land mafia.
        </p>
      </header>

      {/* FILTER PILLS */}
      <div style={styles.filterContainer}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            style={styles.filterBtn(activeCategory === cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />

      {/* BLOG GRID */}
      <div style={styles.blogGrid}>
        {filteredPosts.map(post => (
          <div key={post.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={post.image} alt={post.title} style={styles.cardImage} />
              <div style={styles.floatingBadge}>{post.category}</div>
            </div>
            <div style={styles.contentArea}>
              <div style={styles.metaInfo}>
                <span>🗓 {post.date}</span>
                <span>⏱ {post.read}</span>
              </div>
              <h3 style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.cardDesc}>{post.description}</p>
              <Link to="/blogdetailed" style={styles.readMore}>
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
