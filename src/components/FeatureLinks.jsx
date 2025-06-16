import './FeatureLinks.css';
import { useNavigate } from 'react-router-dom';

const features = [
  { title: 'Departments', icon: '📘', path: '/departments' },
  { title: 'Programs Offered', icon: '🎓', path: '/programs' },
  { title: 'Admissions Open', icon: '📅', path: '/admissions' },
  { title: 'News & Events', icon: '📢', path: '/news' },
];

const FeatureLinks = () => {
  const navigate = useNavigate();

  return (
    <section className="feature-section" data-aos="fade-down">
      <h2 className="feature-heading" data-aos="fade-down" data-aos-delay="100">Explore More</h2>
      <div className="feature-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className="feature-card"
            data-aos="fade-down"  // ✅ Changed to fade-down
            data-aos-delay={index * 150}
            onClick={() => navigate(item.path)}
          >
            <div className="feature-icon">{item.icon}</div>
            <div className="feature-title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureLinks;
