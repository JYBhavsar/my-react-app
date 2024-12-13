import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        {errors.name && <span className="error">{errors.name}</span>}
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        {errors.email && <span className="error">{errors.email}</span>}
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange}></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
        <button type="submit">Let’s Connect!</button>
      </form>
    </section>
  );
};

export default Contact;
