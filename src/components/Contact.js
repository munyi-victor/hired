import React, { useState } from "react";
import nodemailer from "nodemailer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "victormunyi006@gmail.com",
        pass: "munyi006",
      },
    });

    const mailOptions = {
      from: '"Your Name" <your_email@gmail.com>',
      to: "recipient_email@example.com",
      subject: `Contact Form Message from ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      } else {
        console.log("Email sent successfully:", info.messageId);
        alert("Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
