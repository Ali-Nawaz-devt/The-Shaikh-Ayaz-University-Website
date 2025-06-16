import './DepartmentsPage.css';

const departments = [
  { name: 'Computer Science', icon: '💻', description: 'Explore software, AI, and data science.' },
  { name: 'Business Administration', icon: '📊', description: 'Learn marketing, management, and finance.' },
  { name: 'Education', icon: '📚', description: 'Train for teaching and educational leadership.' },
  { name: 'Law', icon: '⚖️', description: 'Understand justice, law, and civil rights.' },
  { name: 'English Literature', icon: '✍️', description: 'Study poetry, fiction, and critical theory.' },
  { name: 'Environmental Science', icon: '🌱', description: 'Focus on sustainability and climate science.' },
  { name: 'Mathematics', icon: '➗', description: 'Strengthen logic, analysis, and pure mathematics.' },
  { name: 'Media & Communication', icon: '🎥', description: 'Explore journalism, media, and public speaking.' },
];

const DepartmentsPage = () => {
  return (
    <section className="departments-section" data-aos="fade-up">
      <div className="departments-header" data-aos="fade-up" data-aos-delay="100">
        <h1>Our Departments</h1>
        <p>Shaikh Ayaz University offers a variety of departments focused on academic excellence and future-ready skills.</p>
      </div>

      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="department-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="dept-icon">{dept.icon}</div>
            <h3>{dept.name}</h3>
            <p>{dept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsPage;
