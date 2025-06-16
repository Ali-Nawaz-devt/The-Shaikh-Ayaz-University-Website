import './EventsSection.css';
import { useState } from 'react';

const events = [
  {
    title: 'Admission Deadline - Fall 2025',
    date: 'July 31, 2025',
    description: 'Apply before the deadline to join SAUS for Fall 2025.',
    fullDetails: 'All students must complete online registration before July 31. Submit all required documents and appear in entrance tests as scheduled.',
    isAdmission: true,
  },
  {
    title: 'Orientation Day',
    date: 'August 20, 2025',
    description: 'Welcome event for new students — meet your faculty & peers.',
    fullDetails: 'Orientation day will include campus tours, introduction sessions, and welcome speeches from faculty.',
    isAdmission: false,
  },
  {
    title: 'Career Fair 2025',
    date: 'September 10, 2025',
    description: 'Top companies are coming to recruit SAUS students!',
    fullDetails: 'Meet top employers at the annual Career Fair. Bring your updated resumes and dress professionally.',
    isAdmission: false,
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEvent = (event) => {
    setSelectedEvent(event);
  };

  const closeEvent = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="events-section" data-aos="fade-up">
      <h2 className="events-heading" data-aos="fade-up" data-aos-delay="100">
        Upcoming Events & News
      </h2>

      <div className="events-grid">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card"
            onClick={() => openEvent(event)}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedEvent && (
        <div className="event-modal">
          <div className="event-modal-content">
            <span className="close-button" onClick={closeEvent}>&times;</span>
            <h2>{selectedEvent.title}</h2>
            <p className="event-date">{selectedEvent.date}</p>
            <p>{selectedEvent.fullDetails}</p>

            {selectedEvent.isAdmission && (
              <button className="apply-now-btn">Apply Now</button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
