import React, { useState } from "react";
import "./Support.css";

function Support() {
  const faqs = [
    {
      question: "Why BellyButton?",
      answer:
        "Tired of asking friends to share photos after every event ? BellyButton makes it easy by giving everyone at your event a single shared space to upload and view photos instantly, so memories stay organized and nothing gets missed."
    },
    {
      question: "Who can create an event?",
      answer:
        "Only the Event director can create an event. The Event director sets the event details, schedule time, and manages camera crew access."
    },
    {
      question: "How many shoot events can I create?",
      answer:
        "You can create up to 4 events per month with your account."
    },
    {
      question: "Is BellyButton free or paid?",
      answer:
        "BellyButton offers a free plan that allows up to 4 events per month."
    },

    {
      question: "How many members can join one shoot event?",
      answer:
        "Each event allows up to 4 members to join and participate."
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
      question: "How is BellyButton different from normal photo sharing apps?",
      answer:
        "BellyButton shares photos in original quality without compression, unlike most photo sharing apps. "
    },
    {
      question: "Can photos be downloaded and shared?",
      answer: "Event director can download photos in original quality and share selected moments."

    },
    {
      question: "Does BellyButton work on both iOS and Android?",
      answer:
        "Yes. BellyButton works on both iOS and Android devices, ensuring seamless participation for all users."
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
