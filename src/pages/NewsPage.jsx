import './NewsPage.css';

const newsEvents = [
  {
    title: 'Orientation Day 2025',
    date: 'August 20, 2025',
    description: 'A welcome event for new students to explore the campus, meet faculty, and join clubs.'
  },
  {
    title: 'Career Fair 2025',
    date: 'September 10, 2025',
    description: 'Top companies visiting to offer internships and job opportunities to our final-year students.'
  },
  {
    title: 'Independence Day Celebration',
    date: 'August 14, 2025',
    description: 'Flag hoisting, cultural performances, and a celebration of national pride.'
  },
  {
    title: 'Midterm Exams Start',
    date: 'October 5, 2025',
    description: 'All students are advised to check the exam schedule uploaded in the student portal.'
  },
  {
    title: 'Research Symposium',
    date: 'November 2, 2025',
    description: 'Students and faculty present innovative research across disciplines.'
  },
  {
    title: 'Sports Week',
    date: 'December 12, 2025',
    description: 'A week of fun, games, and competitions across all departments.'
  }
];

const NewsPage = () => {
  return (
    <section className="news-section" data-aos="fade-up">
      <div className="news-header" data-aos="fade-up" data-aos-delay="100">
        <h1>Latest News & Events</h1>
        <p>Stay informed with the latest updates, events, and announcements at Shaikh Ayaz University.</p>
      </div>

      <div className="news-grid">
        {newsEvents.map((item, index) => (
          <div
            key={index}
            className="news-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="news-date">{item.date}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsPage;
