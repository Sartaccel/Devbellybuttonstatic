import React, { useState } from "react";
import "./Support.css";

function Support() {
  const faqs = [
    {
      question: "Who can create an event?",
      answer:
        "Only the Event director can create an event. The Event director sets the event details, schedule time, and manages camera crew access."
    },
    {
      question: "How do camera Crew join an event?",
      answer:
        "Camera Crew can join an event using a secure invite link shared by the event director. There is no public access."
    },
    {
      question: "Can Crew upload photos anytime?",
      answer:
        "Crew can upload photos only during the scheduled event time set by the event director."
    },
    {
      question: "Who can access the photos?",
      answer: "All photos are private and can be accessed only by the Event director within the event."

    },
    {
      question: "Can photos be downloaded and shared?",
      answer: "Event director can download photos in original quality and share selected moments."

    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="support" className="support-section">
      <div className="support-header">
        <h2 className="support-title">We’re Here to Help</h2>
        <p className="support-subtitle">
          Everything you need to know about using Belly Button.
        </p>
      </div>

      <div className="support-faqs">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h4>{faq.question}</h4>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Support;
