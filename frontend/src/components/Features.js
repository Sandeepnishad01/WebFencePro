import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Real-time Monitoring</h3>
          <p>Track and analyze all incoming traffic and block potential threats instantly.</p>
        </div>
        <div className="feature">
          <h3>Custom Rules</h3>
          <p>Define and implement custom security rules for specific attacks and vulnerabilities.</p>
        </div>
        <div className="feature">
          <h3>Analytics Dashboard</h3>
          <p>Get detailed reports of attacks, traffic, and more through our intuitive dashboard.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
