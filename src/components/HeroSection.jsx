import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook
import './HeroSection.css';

const images = [
  '/bg-campus.png',
  '/bg-campus1.png',
  '/bg-campus2.png',
  '/bg-campus3.png',
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const allSlides = [...images, images[0]]; // Clone first image at end

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [index]);

  const nextSlide = () => {
    if (sliderRef.current) {
      let newIndex = index + 1;
      setIndex(newIndex);
      sliderRef.current.style.transition = 'transform 0.8s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;

      if (newIndex === allSlides.length - 1) {
        setTimeout(() => {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.style.transform = `translateX(0%)`;
          setIndex(0);
        }, 850); // Wait until animation ends
      }
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(images.length - 1);
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(-${(images.length - 1) * 100}%)`;
    } else {
      let newIndex = index - 1;
      setIndex(newIndex);
      sliderRef.current.style.transition = 'transform 0.8s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  return (
    <section className="hero-section-slider">
      <div className="slider-wrapper" ref={sliderRef}>
        {allSlides.map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>

      <div className="slider-overlay">
        <h1>Empowering Minds, Shaping Futures</h1>
        <p>Welcome to Shaikh Ayaz University</p>
        <button className="cta-button" onClick={() => navigate('/apply')}>
          Apply Now
        </button>
      </div>

      <div className="arrow left" onClick={prevSlide}>&#10094;</div>
      <div className="arrow right" onClick={nextSlide}>&#10095;</div>
    </section>
  );
};

export default HeroSection;
