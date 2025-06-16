import { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const StatCard = ({ title, value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(value);
          const stepTime = Math.floor(2000 / end);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat-card" ref={ref} data-aos="fade-up" data-aos-delay="100">
      <h2>{count}+</h2>
      <p>{title}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section" data-aos="fade-up">
      <h1>Our Achievements</h1>
      <div className="stats-grid">
        <StatCard title="Students Enrolled" value="8000" />
        <StatCard title="Departments" value="20" />
        <StatCard title="Programs Offered" value="100" />
        <StatCard title="International Links" value="15" />
      </div>
    </section>
  );
};

export default StatsSection;
