import React from 'react';
import '../styles/LegalPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page privacy-page">
      <div className="container">
        <h1 className="page-title">Privacy Policy</h1>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Information Collection</h2>
            <p>
              When you use frgmt.xyz hosting services, we collect:
            </p>
            <ul>
              <li>Basic contact information (name, email) provided in the hosting request form</li>
              <li>GitHub repository information</li>
              <li>Server usage metrics (resource utilization, traffic)</li>
              <li>Container health data</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>2. Use of Information</h2>
            <p>
              The information collected is used for:
            </p>
            <ul>
              <li>Setting up and maintaining your hosting service</li>
              <li>Communicating with you about your hosted project</li>
              <li>Monitoring server health and performance</li>
              <li>Ensuring compliance with our Terms of Service</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>3. Content Privacy</h2>
            <p>
              While we do not actively monitor the content of your hosted projects, we may periodically check container health and performance. We do not access your personal data or hosted content except in the following circumstances:
            </p>
            <ul>
              <li>When necessary for technical support</li>
              <li>To investigate violations of our Terms of Service</li>
              <li>When required by law</li>
              <li>With your explicit consent</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee the security of information transmitted to or from our services.
            </p>
            <p>
              It is your responsibility to implement appropriate security measures for sensitive content you choose to host.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>5. Third-Party Access</h2>
            <p>
              We do not sell or share your personal information with third parties except:
            </p>
            <ul>
              <li>When required by law</li>
              <li>To protect our rights or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
              <li>With service providers who help us operate the hosting service</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for future collection</li>
              <li>Terminate your hosting service at any time</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>7. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>8. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@frgmt.xyz.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>9. Effective Date</h2>
            <p>
              This Privacy Policy is effective as of May 2025.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 