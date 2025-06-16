import './WhyChooseUs.css';

const features = [
  {
    icon: '🎓',
    title: 'Experienced Faculty',
    description: 'Learn from top-notch professors with real-world experience.'
  },
  {
    icon: '🏢',
    title: 'Modern Facilities',
    description: 'Smart classrooms, research labs, sports facilities, and a vibrant campus.'
  },
  {
    icon: '🔬',
    title: 'Research Opportunities',
    description: 'Cutting-edge research projects, funding, and innovation labs.'
  },
  {
    icon: '🎉',
    title: 'Active Campus Life',
    description: 'Student clubs, events, competitions, and vibrant social life.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" data-aos="fade-down">
      <h2 className="why-heading" data-aos="fade-down" data-aos-delay="100">
        Why Choose Shaikh Ayaz University?
      </h2>

      <div className="why-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="why-card"
            data-aos="fade-down"
            data-aos-delay={index * 150} // staggered animation
          >
            <div className="why-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
