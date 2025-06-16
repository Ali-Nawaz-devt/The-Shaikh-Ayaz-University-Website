import './AdmissionsPage.css';
import { useNavigate } from 'react-router-dom';

const admissionSteps = [
  {
    title: 'Apply Online',
    icon: '🖥️',
    description: 'Start your journey by submitting the admission form online.'
  },
  {
    title: 'Submit Documents',
    icon: '📄',
    description: 'Upload all required academic and identification documents.'
  },
  {
    title: 'Entrance Test',
    icon: '📝',
    description: 'Appear in the entry test as per schedule.'
  },
  {
    title: 'Interview',
    icon: '🎙️',
    description: 'Attend a short interview (if applicable to your program).'
  },
  {
    title: 'Offer Letter',
    icon: '📜',
    description: 'Receive confirmation and official admission letter.'
  },
  {
    title: 'Fee Submission',
    icon: '💳',
    description: 'Pay the fee to confirm your admission seat.'
  }
];

const AdmissionsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="admissions-timeline-section">
      <div className="admissions-header" data-aos="fade-down">
        <h1>Admissions Process</h1>
        <p>Follow these simple steps to become part of Shaikh Ayaz University</p>
      </div>

      <div className="timeline-container">
        {admissionSteps.map((step, index) => (
          <div
            className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="timeline-content">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>

      <div className="apply-cta" data-aos="fade-up" data-aos-delay="800">
        <button className="apply-button" onClick={() => navigate('/apply')}>
          Apply Online
        </button>
      </div>
    </section>
  );
};

export default AdmissionsPage;
