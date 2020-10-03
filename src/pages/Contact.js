import React from "react";
import Hero from "../components/Hero";
import contactBg from "../assets/contact.jpg";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Hero
        title="contact us"
        breadName="contact"
        image={contactBg}
        singleProduct={false}
      />
      <section className="ftco-section contact-section bg-light">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="w-100"></div>
            <a
              href="https:maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="col-md-4 d-flex justify-content-center align-items-center"
            >
              <div className="info bg-primary p-4 d-flex justify-content-center align-items-center flex-column">
                <span className="contact-icon">
                  <FaHome />
                </span>
                <p className="text-white">
                  21th Street, Suite 721 New York NY 10016
                </p>
              </div>
            </a>
            <a
              href="tel://1234567920"
              className="col-md-4 d-flex justify-content-center align-items-center"
            >
              <div className="info bg-primary p-4 d-flex justify-content-center align-items-center flex-column">
                <span className="contact-icon">
                  <FaPhone />
                </span>
                <p className="text-white">+ 1235 2355 98</p>
              </div>
            </a>
            <a
              href="mailto:info@yoursite.com"
              className="col-md-4 d-flex justify-content-center align-items-center"
            >
              <div className="info bg-primary p-4 d-flex justify-content-center align-items-center flex-column">
                <span className="contact-icon">
                  <FaEnvelope />
                </span>
                <p className="text-white">info@yoursite.com</p>
              </div>
            </a>
            {/* <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Website</span> <a href="#">yoursite.com</a>
                </p>
              </div>
            </div> */}
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-white p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.9516259681927!2d-79.07842955677953!3d43.08451233788236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d343380bafe607%3A0xfa9fdc488a571008!2sNiagara%20Falls%20Fireworks!5e0!3m2!1sen!2s!4v1600887844610!5m2!1sen!2s"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="niagrafalls"
                className="bg-white"
              ></iframe>
              {/* <div id="map" className="bg-white"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
