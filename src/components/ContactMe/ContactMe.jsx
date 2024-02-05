import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className=" md:mt-12">
      <h1 className="text-3xl mb-2 text-[#3d8b9e] text-center">Contact Me</h1>

      <div className=" text-[#3d8b9e] flex flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="text-center my-4">
          <FaMapMarkerAlt className="mx-auto w-12 h-12" />
          <h1>
            Dortmund,44227 <br /> NRW, Germany.
          </h1>
        </div>
        <div>
          <FaEnvelope className="mx-auto w-12 h-12" />

          <a href="mailto:azadh4110@gmail.com">azadh4110@gmail.com</a>
        </div>
        <div className="mt-4">
          <FaLinkedin className="mx-auto w-12 h-12" />
          <a
            href="https:www.linkedin.com/in/md-azad-hossain1"
            target="_blank"
            rel="noreferrer"
          >
            Md Azad Hossain
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
