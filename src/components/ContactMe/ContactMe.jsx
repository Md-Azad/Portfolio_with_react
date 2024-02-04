import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h1 className="text-2xl mb-2">Contact Me</h1>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:azadh4110@gmail.com">azadh4110@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a
            href="https:www.linkedin.com/in/md-azad-hossain1" target="_blank" rel="noreferrer"
          >
            Md Azad Hossain
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
