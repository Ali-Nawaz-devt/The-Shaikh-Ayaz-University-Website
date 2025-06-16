import './ProgramsPage.css';

const programs = [
  { 
    name: 'BS Computer Science', 
    duration: '4 Years', 
    icon: '💻', 
    description: 'Master software development, AI, and data science.'
  },
  { 
    name: 'BBA Business Administration', 
    duration: '4 Years', 
    icon: '📈', 
    description: 'Learn marketing, finance, and entrepreneurship.'
  },
  { 
    name: 'BS Education', 
    duration: '4 Years', 
    icon: '📚', 
    description: 'Prepare for a career in teaching and educational leadership.'
  },
  { 
    name: 'LLB Law', 
    duration: '5 Years', 
    icon: '⚖️', 
    description: 'Study legal principles and practice justice.'
  },
  { 
    name: 'MS Computer Science', 
    duration: '2 Years', 
    icon: '🖥️', 
    description: 'Advance in AI, machine learning, and cybersecurity.'
  },
  { 
    name: 'M.Ed Education', 
    duration: '2 Years', 
    icon: '🎓', 
    description: 'Specialize in curriculum design and leadership roles.'
  },
  { 
    name: 'MBA Business', 
    duration: '2 Years', 
    icon: '💼', 
    description: 'Lead businesses with advanced management skills.'
  },
  { 
    name: 'BS Environmental Science', 
    duration: '4 Years', 
    icon: '🌍', 
    description: 'Focus on climate change, sustainability, and research.'
  }
];

const ProgramsPage = () => {
  return (
    <section className="programs-section" data-aos="fade-up">
      <div className="programs-header" data-aos="fade-up" data-aos-delay="100">
        <h1>Programs Offered</h1>
        <p>Explore our diverse undergraduate and postgraduate programs designed for future leaders.</p>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div
            key={index}
            className="program-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="program-icon">{program.icon}</div>
            <h3>{program.name}</h3>
            <p className="program-duration">{program.duration}</p>
            <p className="program-description">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsPage;
