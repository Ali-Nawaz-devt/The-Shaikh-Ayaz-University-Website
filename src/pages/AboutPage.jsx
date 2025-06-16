import './AboutPage.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-full-page">
      <div className="about-header" data-aos="fade-up">
        <h1>About Shaikh Ayaz University</h1>
        <p>Empowering minds and shaping futures through education and research excellence.</p>
      </div>

      <div className="about-content">
        <div className="about-description" data-aos="fade-right">
          <h2>Who We Are</h2>
          <p>
            Shaikh Ayaz University, situated in Shikarpur, Sindh, is committed to fostering knowledge,
            innovation, and leadership. With state-of-the-art facilities and a forward-thinking academic
            environment, SAUS stands as a beacon of progress for students seeking quality education in Pakistan.
          </p>

          <h2>Our Vision</h2>
          <p>
            To become a leading institution of higher education that transforms individuals into leaders
            who impact society through knowledge, creativity, and integrity.
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver high-quality education, promote critical thinking, engage in impactful research,
            and produce graduates who contribute to social and economic development.
          </p>
        </div>

        <div className="about-image-box" data-aos="fade-left">
          <img src="/bg-campus1.png" alt="Shaikh Ayaz University Campus" />
        </div>
      </div>

      <div className="about-values-section" data-aos="fade-up">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card" data-aos="zoom-in" data-aos-delay="100">🎓 Academic Excellence</div>
          <div className="value-card" data-aos="zoom-in" data-aos-delay="200">🤝 Integrity & Ethics</div>
          <div className="value-card" data-aos="zoom-in" data-aos-delay="300">🌱 Innovation & Growth</div>
          <div className="value-card" data-aos="zoom-in" data-aos-delay="400">🌍 Community Engagement</div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
