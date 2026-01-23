import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";

function Testimonial() {
  const testimonials = [
    {
      name: "Ananya S",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "BellyButton made it so easy to collect photos from everyone at our wedding. All memories in one place."
    },
    {
      name: "Rahul K",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text:
        "No more asking people to send photos later. Everyone uploaded instantly during the event."
    },
    {
      name: "Meera P",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text:
        "Loved the private gallery and high quality downloads. Very clean and simple to use."
    }
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearTimeout(timerRef.current);
  }, [current, testimonials.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="stories" className="testimonial-section">
      <h2 className="testimonial-title">Stories from our users</h2>

      <div className="testimonial-wrapper">

        {/* Left Arrow */}
        <span className="t-arrow left" onClick={prevSlide}>
          ‹
        </span>

        {/* Testimonial */}
        <div className="testimonial-content">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="testimonial-img"
          />
          <p className="testimonial-text">
            “{testimonials[current].text}”
          </p>
          <h4 className="testimonial-name">
            {testimonials[current].name}
          </h4>
        </div>

        {/* Right Arrow */}
        <span className="t-arrow right" onClick={nextSlide}>
          ›
        </span>
      </div>

      {/* Dots */}
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
