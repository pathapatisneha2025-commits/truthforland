import React from 'react';

// --- Styles ---
const styles = {
  container: {
    padding: '60px 5%',
    backgroundColor: '#f9f8f3',
    fontFamily: "'Inter', sans-serif",
    minHeight: '100vh',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto 40px auto',
  },
  freeBadge: {
    backgroundColor: '#4a5d23',
    color: 'white',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
  },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '20px',
  },
  mainTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: '#333',
    margin: '0',
    fontFamily: 'serif',
    fontWeight: '700',
  },
  subtitle: {
    color: '#666',
    fontSize: '1.1rem',
    marginTop: '15px',
    maxWidth: '600px',
  },
  viewAllBtn: {
    backgroundColor: '#947a32',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'box-shadow 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  iconBox: {
    backgroundColor: '#fff1f1',
    color: '#d32f2f',
    padding: '8px',
    borderRadius: '8px',
    fontSize: '20px',
  },
  typeTag: {
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    padding: '2px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: '#1f2937',
    margin: '0 0 10px 0',
    lineHeight: '1.4',
  },
  cardDesc: {
    color: '#6b7280',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '24px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  fileInfo: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  btnGroup: {
    display: 'flex',
    gap: '8px',
  },
  actionBtn: {
    padding: '8px 14px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    border: '1px solid #4a5d23',
    backgroundColor: 'white',
    color: '#4a5d23',
  },
  downloadBtn: {
    backgroundColor: '#f0f4ee',
    border: '1px solid #4a5d23',
    color: '#4a5d23',
  }
};

// --- Child Component: ResourceCard ---
const ResourceCard = ({ type, title, description, size }) => (
  <div style={styles.card}>
    <div>
      <div style={styles.cardHeader}>
        <div style={styles.iconBox}>📄</div>
        <span style={styles.typeTag}>{type}</span>
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{description}</p>
    </div>
    
    <div style={styles.cardFooter}>
      <span style={styles.fileInfo}>PDF • {size}</span>
      <div style={styles.btnGroup}>
        <button style={styles.actionBtn}>👁 View</button>
        <button style={{...styles.actionBtn, ...styles.downloadBtn}}>📥 Download</button>
      </div>
    </div>
  </div>
);

// --- Main Component: AntiLandMafiaResources ---
export default function ResourcesSection() {
  const resourceData = [
    {
      type: 'Legal Document',
      title: 'Land Acquisition Act 2013 - Co...',
      description: 'Comprehensive explanation of the Right to Fair Compensation and Transparency in Land...',
      size: '2.4 MB'
    },
    {
      type: 'Guide',
      title: 'How to File RTI for Land Reco...',
      description: 'Step-by-step guide with sample application format for obtaining land records through RTI.',
      size: '856 KB'
    },
    {
      type: 'Template',
      title: 'Sample Legal Notice Format f...',
      description: 'Ready-to-use legal notice templates for various land dispute scenarios.',
      size: '1.2 MB'
    },
    {
      type: 'Reference',
      title: 'State-wise Land Revenue Acts ...',
      description: 'Compilation of key land revenue laws across different states in simplified language.',
      size: '3.1 MB'
    },
    {
      type: 'Template',
      title: 'FIR Template for Land Fraud C...',
      description: 'Sample FIR formats for reporting land grabbing and document forgery to police.',
      size: '524 KB'
    },
    {
      type: 'Guide',
      title: 'Checklist: Verifying Land Doc...',
      description: 'Essential checklist to verify authenticity of land documents before purchase.',
      size: '412 KB'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.headerContent}>
        <div style={styles.freeBadge}>
          <span>📄</span> Free Resources
        </div>
        <div style={styles.titleRow}>
          <h1 style={styles.mainTitle}>Legal Resources & Documents</h1>
          <button style={styles.viewAllBtn}>View All Resources</button>
        </div>
        <p style={styles.subtitle}>
          Download free legal guides, templates, and documents to protect your land rights.
        </p>
      </div>

      <div style={styles.grid}>
        {resourceData.map((item, index) => (
          <ResourceCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}