import "./CertificationBadges.css";

const CertificationBadges = () => {
  // No need for the Credly script since we're using direct image links

  return (
    <div className="certification-section">
      <h2 className="certification-title">Professional Certifications</h2>
      <div className="badges-container">
        <div className="badge-card">
          <div className="badge-image">
            <img
              src="public/images/cisco-certified-support-technician-cybersecurity-cc.png"
              alt="Cisco Certified Support Technician (CCST)"
            />
          </div>
          <div className="badge-info">
            <h3>Cisco Certified Support Technician (CCST)</h3>
            <p className="badge-issuer">Cisco</p>
            <p className="badge-date">Networking Fundamentals</p>
          </div>
        </div>

        <div className="badge-card">
          <div className="badge-image">
            <img
              src="images/adobe-certified-professional-in-visual-design-using-adobe-photoshop-2.png"
              alt="Adobe Certified Professional in Visual Design"
            />
          </div>
          <div className="badge-info">
            <h3>Adobe Certified Professional</h3>
            <p className="badge-issuer">Adobe</p>
            <p className="badge-date">Visual Design with Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadges;
