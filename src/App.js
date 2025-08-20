import React, { useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faRocket, faHandshake, faTruck, faBookOpen, faEye, faBullseye, faEnvelope, faPhone, faBlog, faGlobe, faHome, faCogs, faQuoteLeft, faUsers, faIndustry, faChartBar, faLaptopCode, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logoImg from './logo.jpg';
import photoImg from './photo.jpg';

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listeners to all anchor tags
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleNavClick);
    });

    // Cleanup event listeners
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logoImg} alt="Company Logo" />
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Driving Growth in <span className="highlight">Automobile</span> Aftermarket</h1>
            <p>With over 30 years of experience in the automotive industry, spanning trading and 5+ years as a business growth consultant, we help automotive businesses accelerate their success in the automobile aftermarket industry.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="social-links">
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="youtube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={photoImg} alt="Business Consultant" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <div className="stat-number">30+</div>
            <div className="stat-label">Years of Industry Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Years of Business Consulting</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div className="stat-number">9+</div>
            <div className="stat-label">Successful Collaborations</div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="section services">
        <div className="section-gradient"></div>
        <div className="container">
          <h2>Comprehensive Consulting Solutions</h2>
          <p>Tailored strategies and expert guidance to accelerate your growth in the competitive automotive aftermarket industry</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              <h3>Strategic Business Development</h3>
              <p>Comprehensive business strategy development tailored specifically for automobile aftermarket businesses, focusing on sustainable growth and competitive advantage.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faIndustry} />
              </div>
              <h3>Market Research & Analysis</h3>
              <p>In-depth market research and competitive analysis to identify untapped opportunities and optimize your market positioning in the aftermarket sector.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <h3>Supply Chain Excellence</h3>
              <p>Streamline your supply chain operations with proven methodologies that maximize efficiency, reduce costs, and improve delivery performance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3>Growth Acceleration</h3>
              <p>Personalized consulting services designed to accelerate your business growth, enhance market penetration, and maximize profitability in the automotive aftermarket.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3>Digital Transformation</h3>
              <p>Modernize your operations with cutting-edge digital solutions, automation technologies, and data-driven insights to stay competitive in the digital age.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <h3>Team Development & Training</h3>
              <p>Comprehensive training programs and skill development initiatives to upskill your team and improve operational efficiency across all departments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <div className="section-gradient"></div>
        <div className="container">
          <h2>Success Stories & Client Testimonials</h2>
          <p>Hear from our satisfied clients who have transformed their businesses with our expert guidance and strategic consulting services</p>
          <div className="testimonials-container">
            <div className="photo-testimonials">
              <h3>Client Success Stories</h3>
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-avatar">R</div>
                  <p>"The expertise and strategic guidance provided helped us increase our market share by 40% within the first year. Their deep understanding of the automotive aftermarket is unparalleled."</p>
                  <div className="testimonial-author">
                    <strong>Robert Wilson</strong>
                    <span>VP Sales, AutoMotive Inc.</span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-avatar">L</div>
                  <p>"Outstanding consulting services that completely transformed our business operations and profitability. The ROI from their recommendations has been exceptional."</p>
                  <div className="testimonial-author">
                    <strong>Lisa Chen</strong>
                    <span>Owner, Parts Paradise</span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-avatar">D</div>
                  <p>"Professional, knowledgeable, and results-driven approach. I highly recommend their services to any automotive business looking to scale and grow."</p>
                  <div className="testimonial-author">
                    <strong>David Martinez</strong>
                    <span>COO, FastTrack Auto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="section story">
        <div className="section-gradient"></div>
        <div className="container">
          <h2>Our Journey, Vision & Mission</h2>
          <p>Built on decades of industry experience and driven by a passion for automotive excellence</p>
          <div className="story-content">
            <div className="story-item">
              <div className="story-icon">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <h3>Our Story</h3>
              <p>Founded on three decades of automotive trading experience, our journey began in the heart of the aftermarket industry. What started as a passion for automotive excellence has evolved into a comprehensive consulting practice dedicated to helping businesses thrive in this dynamic sector. Our hands-on experience, combined with deep industry insights, positions us uniquely to guide companies through their growth journey and navigate the complexities of the modern automotive aftermarket.</p>
            </div>
            <div className="story-item">
              <div className="story-icon">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3>Our Vision</h3>
              <p>To strengthen aftermarket community by sharing knowledge and driving collective growth among distributors, wholesalers, retailers, and industry partners in the two wheeler spares industry.</p>
            </div>
            <div className="story-item">
              <div className="story-icon">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h3>Our Mission</h3>
              <p>To connect, educate, and motivate auto aftermarket professionals by curating relevant market trends, celebrating community accomplishments, and sharing proven tactics that elevate performance and prosperity across the sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="section-gradient"></div>
        <div className="container">
          <h2>Let's Drive Your Success Together</h2>
          <p>Ready to accelerate your business growth and dominate the automotive aftermarket? Connect with us today to start your transformation journey.</p>
          <div className="contact-content">
            <div className="contact-form">
              <h3>Start Your Growth Journey</h3>
              <p>Fill out our consultation form and let's discuss how we can help you achieve your business objectives.</p>
              <form className="contact-form-fields">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    <option value="business-development">Strategic Business Development</option>
                    <option value="market-research">Market Research & Analysis</option>
                    <option value="supply-chain">Supply Chain Excellence</option>
                    <option value="growth-acceleration">Growth Acceleration</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="team-development">Team Development & Training</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Tell us about your business challenges and goals..."></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <h4><FontAwesomeIcon icon={faEnvelope} /> Email</h4>
                <p><a href="mailto:info@automobileaftermarket.com">info@automobileaftermarket.com</a></p>
              </div>
              <div className="contact-item">
                <h4><FontAwesomeIcon icon={faPhone} /> Phone</h4>
                <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
              </div>
              <div className="contact-item">
                <h4><FontAwesomeIcon icon={faBlog} /> Blog</h4>
                <p><a href="https://medium.com/@khushrajnandedkar" target="_blank" rel="noopener noreferrer">Follow us on Medium</a></p>
              </div>
              <div className="contact-item">
                <h4><FontAwesomeIcon icon={faGlobe} /> Website</h4>
                <p><a href="https://automobileaftermarket.com" target="_blank" rel="noopener noreferrer">automobileaftermarket.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Automobile Aftermarket Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
