import './ContactPage.css';

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Shaikh Ayaz University</h2>
            <p><strong>Address:</strong> Shikarpur, Sindh, Pakistan</p>
            <p><strong>Email:</strong> info@saus.edu.pk</p>
            <p><strong>Phone:</strong> +92 722 651575</p>

            <div className="map-box">
              <iframe
                title="SAUS Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.684355293837!2d68.63669201449308!3d27.940395382697204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3936b2fba9f7c01d%3A0x410050a1e0e9ecda!2sShaikh%20Ayaz%20University!5e0!3m2!1sen!2s!4v1689600000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
