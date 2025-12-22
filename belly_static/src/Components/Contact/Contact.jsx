import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: ""
  });

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "*Please enter your name";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!form.email.trim()) {
      newErrors.email = "*Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.phone) {
      newErrors.phone = "*Please enter your phone number";
    }

    if (!form.message.trim()) {
      newErrors.message = "*Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setAlert({
        show: true,
        type: "success",
        message: "Thank you! Your message has been sent successfully."
      });

      setForm({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 3000);
    } else {
      setAlert({
        show: true,
        type: "error",
        message: "Please fix the errors before submitting."
      });

      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Have a question or want to collaborate? We’d love to hear from you.
      </p>

      {alert.show && (
        <div className={`form-alert ${alert.type}`}>
          {alert.message}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your Mail"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone Number</label>
          <PhoneInput
            country={"in"}
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            inputClass="phone-input"
            containerClass="phone-container"
            buttonClass="phone-flag"
            placeholder="Phone number"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us how we can help"
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button type="submit" className="contact-btn">
          Submit
        </button>

      </form>
    </section>
  );
}

export default Contact;
