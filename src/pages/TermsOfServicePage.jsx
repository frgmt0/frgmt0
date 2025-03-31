import React from 'react';
import '../styles/LegalPage.css';

const TermsOfServicePage = () => {
  return (
    <div className="legal-page tos-page">
      <div className="container">
        <h1 className="page-title">Terms of Service</h1>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using the hosting services provided by frgmt.xyz, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>2. Service Description</h2>
            <p>
              frgmt.xyz provides free hosting services for personal websites, discord bots, GitHub repositories, and personal files up to 5GB per user. This service is offered on an "as is" and "as available" basis without warranties of any kind.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>3. User Responsibilities</h2>
            <p>
              Users are responsible for:
            </p>
            <ul>
              <li>Ensuring their hosted content complies with all applicable laws and regulations</li>
              <li>Implementing appropriate security measures for their hosted content</li>
              <li>Maintaining backups of their data</li>
              <li>Ensuring their code does not pose security risks to the hosting infrastructure</li>
              <li>Properly documenting any special requirements in frgmt.txt/md files</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>4. Prohibited Content</h2>
            <p>
              The following types of content are strictly prohibited:
            </p>
            <ul>
              <li>Misinformation or disinformation</li>
              <li>Discriminatory content (anti-semitic, anti-arab, racist, etc.)</li>
              <li>Fascist sympathetic materials</li>
              <li>Pornography</li>
              <li>Illegal content of any kind</li>
              <li>Commercial online stores</li>
              <li>Payment processing systems</li>
              <li>Content that violates the intellectual property rights of others</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>5. Service Termination</h2>
            <p>
              frgmt.xyz reserves the right to terminate hosting services for any user at any time, for any reason, without prior notice. This includes, but is not limited to, violations of these Terms of Service.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              frgmt.xyz is not responsible for:
            </p>
            <ul>
              <li>Data loss or breaches of user-hosted content</li>
              <li>Unauthorized access to user-hosted content</li>
              <li>Service interruptions or downtime</li>
              <li>Any damages arising from the use or inability to use the service</li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>7. Modifications to Terms</h2>
            <p>
              frgmt.xyz reserves the right to modify these Terms of Service at any time. Continued use of the service after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>
          
          <section className="legal-section">
            <h2>8. Effective Date</h2>
            <p>
              These Terms of Service are effective as of May 2025 and will remain in effect until modified or terminated.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 