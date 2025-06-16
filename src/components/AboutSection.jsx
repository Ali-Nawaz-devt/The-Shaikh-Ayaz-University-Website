import './AboutSection.css';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section" data-aos="fade-up">
      <div className="about-container">
        
        <div className="about-text" data-aos="fade-right" data-aos-delay="100">
          <h2>About Shaikh Ayaz University</h2>
          <p>
            Shaikh Ayaz University is dedicated to excellence in teaching, learning, and research. 
            We are shaping the leaders of tomorrow by offering dynamic programs, a vibrant campus life, 
            and opportunities for global engagement.
          </p>
          <button onClick={() => navigate('/about')} className="about-btn">
            Learn More
          </button>
        </div>

        <div className="about-image" data-aos="fade-left" data-aos-delay="200">
          <img src="/bg-campus.png" alt="About SAUS" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
