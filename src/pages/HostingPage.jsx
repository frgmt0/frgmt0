import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HostingPage.css';
import '../styles/globals.css';

const HostingPage = () => {
  return (
    <div className="hosting-page">
      <div className="container">
        <h1 className="page-title">Hosting Services</h1>
        
        <section className="hosting-section">
          <h2>What I Will Host</h2>
          <ul>
            <li>Personal sites</li>
            <li>Discord bots</li>
            <li>Up to 5GB of data</li>
            <li>Personal items like files/photos you may want "in the cloud" for free</li>
            <li>GitHub repositories</li>
          </ul>
        </section>
        
        <section className="hosting-section">
          <h2>What I Won't Host</h2>
          <ul>
            <li>Websites that disseminate misinformation or disinformation</li>
            <li>Anti-semitic, anti-arab, racist, or fascist sympathetic pages</li>
            <li>Pornography</li>
            <li>Illegal content</li>
            <li>Online stores</li>
            <li>Payment information</li>
          </ul>
        </section>
        
        <section className="hosting-section">
          <h2>How to Host</h2>
          <ol>
            <li>Make sure your repo has a Dockerfile.</li>
            <li>If you have specific information, include it in a frgmt.txt/md file with commands to run, dependencies needed, etc.</li>
            <li>Your repo should have a monitor function to check for GitHub pushes and automatically reload the container (not mandatory but recommended).</li>
            <li>Fill out the <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">hosting request form</a>.</li>
            <li>Include your name (first name or initials are acceptable).</li>
            <li>Your project will be available at on.frgmt.xyz/h/YourName/YourProject.</li>
            <li>Allow 3-5 days for setup.</li>
          </ol>
        </section>
        
        <section className="hosting-section">
          <h2>Disclaimers</h2>
          <p>
            While I will not actively view projects or containers once they are up and running, I may periodically check the health of the container and ensure that everything is running smoothly.
          </p>
          <p>
            It is up to you to handle any authentication or gatekeeping for anything you host. I am not responsible for any leaks, unauthorized access, etc. If you have personal files you want to keep private, please keep them secured appropriately.
          </p>
          <p>
            For this reason, it is recommended that you do NOT host any sensitive personal information.
          </p>
          <p>
            I reserve the right to take down your project whenever I want for any reason if it breaks any of the rules.
          </p>
        </section>
        
        <section className="hosting-section">
          <h2>Coming Soon</h2>
          <p>This service is coming May 2025.</p>
          <p>
            In the meantime, please read the <Link to="/tos">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link> to learn more.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HostingPage; 