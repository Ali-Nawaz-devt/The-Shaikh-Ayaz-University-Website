import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>Shaikh Ayaz University</h2>
          <p>Empowering Minds, Shaping Futures</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/news">News</Link>
        </div>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="LinkedIn">🔗</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Shaikh Ayaz University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
