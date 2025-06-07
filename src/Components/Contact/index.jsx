import emailjs from 'emailjs-com';
import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import SocialHandles from '../../ui/SocialHandles';
import { BsFillSendFill } from "react-icons/bs";
import { useState, useEffect } from 'react';

const SERVICE_ID = "service_ux9at4k";
const TEMPLATE_ID = "template_ao427fd";
const PUBLIC_KEY = "qanLRACgrClKBdvU1";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
  .then(() => {
    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setStatus('');
    }, 3000);
  })
  .catch(() => {
    setStatus("❌ Something went wrong. Try again later.");

    setTimeout(() => {
      setStatus('');
    }, 3000);
  });

  };

  return (
    <section id='contact'>
      <div className="section__wrapper">
        <div className="pyramid__container"><Pyramid /></div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className='shine'>great project</span> together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className='flex option' key={index}>
                  <div className="contact__icon"><img src={contact.icon} alt="" /></div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">{contact.value}</p>
                    </div>
                    <a href={contact.link} target='_blank' rel="noreferrer" className='flex__center btn'>
                      <span className='btn__shine text'>Message</span>
                      <div className="flex__center icon" style={{ background: contact.color }}>{contact.btnIcon}</div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="error">{errors.name}</small>}

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <small className="error">{errors.message}</small>}

            <button type="submit" className='btn flex__center submit__btn'>
              <div className="icon"><BsFillSendFill /></div>
              <span>Send Now</span>
            </button>

            {status && (
              <p className="status-message"
                style={{
                  marginTop: "1rem",
                  color: status.startsWith("✅") ? "lightgreen" : "#fc605b",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center"
                }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
