import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <header>
        <div className="container">
          <nav>
            <h1 className="logo">WebFencePro</h1>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h2>Tailored Security Solutions for Your Unique Web Needs.</h2>
          <p>
            WebFencePro is an advanced Web Application Firewall (WAF) designed to provide comprehensive protection for your website against a wide range of cyber threats. Our solution actively monitors incoming traffic, detects potential attacks in real-time, and shields your website from vulnerabilities. We believe that robust cybersecurity should be accessible, so we offer tailored subscription plans and expert support to help you safeguard your digital assets with ease.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Get Started</a>
            <a href="#" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container features-grid">
          {/* Basic Plan */}
          <div className="feature">
            <i className="icon">🔥</i>
            <h3>Basic Plan</h3>
            <h3>Price: $29/month</h3>
            <ul>
              <li>Real-time threat monitoring</li>
              <li>Basic firewall protection against common attacks</li>
              <li>Monthly security reports</li>
              <li>Email alerts for detected threats</li>
              <li>24/7 customer support via email</li>
            </ul>
          </div>

          {/* Feature Two */}
          <div className="feature">
            <i className="icon">⚙️</i>
            <h3> Pro Plan</h3>
            <h3>Price: $79/month</h3>
            <ul>
            <li>All features from the Basic Plan</li>
  <li>Advanced threat detection using machine learning</li>
  <li>Customizable firewall rules</li>
  <li>Daily security reports with detailed analytics</li>
  <li>DDoS protection</li>
  <li>Priority customer support via chat and email</li>
            </ul>
            
          </div>

          {/* Feature Three */}
          <div className="feature">
            <i className="icon">⭐</i>
            <h3>Enterprise Plan</h3>
            <h3>Price: $199/month</h3>
            <ul>
  <li>All features from the Pro Plan</li>
  <li>Comprehensive security assessment and consultation</li>
  <li>Multi-layered security architecture</li>
  <li>Real-time traffic analysis and incident response</li>
  <li>API access for integration with other security tools</li>
  <li>Dedicated account manager for personalized support</li>
</ul>

          </div>
        </div>
      </section>

      {/* Main Benefit Section */}
      <section className="benefit">
        <div className="container">
          <h2>Heading Explaining the Main Benefit of Your App</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div className="benefit-image">
            <img src="https://via.placeholder.com/400x200" alt="Benefit" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <blockquote>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
            </p>
            <footer>— John Doe, CTO of Client Company</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container contact-container">
          <h2>Get In Touch</h2>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
          <form className="contact-form">
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Full name" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 WebFencePro. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
