import React from 'react';

/**
 * ANTI LAND MAFIA - LEGAL RESOURCES PAGE
 * All-in-one component with integrated styling
 */

const ResourcesPage = () => {
  // --- Data Array ---
  const resources = [
    {
      id: 1,
      type: 'Legal Document',
      title: 'Land Acquisition Act 2013 - Comprehensive Guide',
      description: 'Comprehensive explanation of the Right to Fair Compensation and Transparency in Land Acquisition.',
      size: '2.4 MB'
    },
    {
      id: 2,
      type: 'Guide',
      title: 'How to File RTI for Land Records',
      description: 'Step-by-step guide with sample application format for obtaining land records through RTI.',
      size: '856 KB'
    },
    {
      id: 3,
      type: 'Template',
      title: 'Sample Legal Notice Format for Land Disputes',
      description: 'Ready-to-use legal notice templates for various land dispute scenarios.',
      size: '1.2 MB'
    },
    {
      id: 4,
      type: 'Reference',
      title: 'State-wise Land Revenue Acts Compilation',
      description: 'Compilation of key land revenue laws across different states in simplified language.',
      size: '3.1 MB'
    },
    {
      id: 5,
      type: 'Template',
      title: 'FIR Template for Land Fraud Cases',
      description: 'Sample FIR formats for reporting land grabbing and document forgery to police.',
      size: '524 KB'
    },
    {
      id: 6,
      type: 'Guide',
      title: 'Checklist: Verifying Land Documents',
      description: 'Essential checklist to verify authenticity of land documents before purchase.',
      size: '412 KB'
    }
  ];

  // --- Inline Styles ---
  const styles = {
    section: {
      backgroundColor: '#F9F8F3', // Cream background from screenshot
      padding: '80px 5%',
      minHeight: '100vh',
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    badge: {
      backgroundColor: '#4B5E26', // Dark olive green
      color: '#FFFFFF',
      padding: '6px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '24px',
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '10px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      color: '#1A1A1A',
      margin: 0,
      fontFamily: "'Playfair Display', serif", // Serif font for headings
      fontWeight: '700',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#666',
      maxWidth: '600px',
      lineHeight: '1.6',
      margin: '10px 0 50px 0',
    },
    viewAllBtn: {
      backgroundColor: '#967B33', // Gold/Brown color
      color: 'white',
      border: 'none',
      padding: '14px 28px',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '16px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '24px',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '30px',
      border: '1px solid #E5E7EB',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
    },
    iconBox: {
      backgroundColor: '#FFF1F1',
      color: '#DC2626',
      padding: '10px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryTag: {
      backgroundColor: '#F3F4F6',
      color: '#6B7280',
      padding: '4px 12px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '500',
    },
    cardTitle: {
      fontSize: '1.4rem',
      color: '#111827',
      margin: '0 0 12px 0',
      lineHeight: '1.3',
    },
    cardText: {
      color: '#4B5563',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      marginBottom: '30px',
      flexGrow: 1,
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid #F3F4F6',
      paddingTop: '20px',
    },
    fileMeta: {
      fontSize: '13px',
      color: '#9CA3AF',
      fontWeight: '500',
    },
    actions: {
      display: 'flex',
      gap: '10px',
    },
    btnAction: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 14px',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      border: '1px solid #4B5E26',
      transition: 'all 0.2s ease',
    },
    viewBtn: {
      backgroundColor: 'white',
      color: '#4B5E26',
    },
    downloadBtn: {
      backgroundColor: '#F0F4E8',
      color: '#4B5E26',
    }
  };

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        
        {/* Top Header Area */}
        <div style={styles.badge}>
          <span>📄</span> Free Resources
        </div>
        
        <div style={styles.headerRow}>
          <h1 style={styles.title}>Legal Resources & Documents</h1>
          <button style={styles.viewAllBtn}>View All Resources</button>
        </div>
        
        <p style={styles.subtitle}>
          Download free legal guides, templates, and documents to protect your land rights.
        </p>

        {/* Resources Grid */}
        <div style={styles.grid}>
          {resources.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.iconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <span style={styles.categoryTag}>{item.type}</span>
              </div>

              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.description}</p>

              <div style={styles.footer}>
                <span style={styles.fileMeta}>PDF • {item.size}</span>
                <div style={styles.actions}>
                  <button style={{...styles.btnAction, ...styles.viewBtn}}>
                    <span>👁</span> View
                  </button>
                  <button style={{...styles.btnAction, ...styles.downloadBtn}}>
                    <span>📥</span> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;