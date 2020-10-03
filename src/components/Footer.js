import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row">
          <div className="mouse">
            <div onClick={scrollBackToTop} className="mouse-icon">
              <div className="mouse-wheel">
                <IoIosArrowUp />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Vegefoods</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-twitter">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-facebook">
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-instagram">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Menu</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="py-2 d-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="py-2 d-block">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="py-2 d-block">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="py-2 d-block">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Help</h2>
              <div className="d-flex">
                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                  <li>
                    <a
                      href="https://www.google.com/search?sxsrf=ALeKk02rhoYhakdOB6qLecu2SHHg0NZipw%3A1600780962521&ei=ovppX7egH4fBUv74hogC&q=shipping+information&oq=shipping+information&gs_lcp=CgZwc3ktYWIQAzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQR1DlIlijJGDUJ2gAcAJ4AIABpwKIAagEkgEDMi0ymAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwi3-Yjl7fzrAhWHoBQKHX68ASEQ4dUDCA0&uact=5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 d-block"
                    >
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/search?sxsrf=ALeKk00zhKC3dqKKM3nXJBjsZU1JSAPYIQ%3A1600780968863&ei=qPppX62sNOPmgwfUh4i4BQ&q=returns+%26+exchanges&oq=returns+%26+ex&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgQIIxAnOgQIABBDOgUIABCxAzoICAAQsQMQgwE6BQgAEJECOgcIABCxAxBDOgIILlDTwAVYj9cFYNrcBWgBcAF4AIAB2gKIAdIekgEFMi02LjeYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab"
                      className="py-2 d-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Returns &amp; Exchange
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/search?sxsrf=ALeKk02DYBmiYR_FgMdm_yKqZJqgO_sW8g%3A1600781085195&ei=HftpX_fMC8zearXbt8AL&q=terms+and+conditions&oq=terms+and+conditions&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCC4yAggAMgIIADIECAAQHjIECAAQHjIECAAQHjIECAAQHjoECAAQR1CsGVimIGD2ImgAcAJ4AIABzAOIAfIHkgEHMi0xLjEuMZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwi3z8if7vzrAhVMrxoKHbXtDbgQ4dUDCA0&uact=5"
                      className="py-2 d-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/search?sxsrf=ALeKk02BapsGlzftxbZ40x9e6cxVnZJ51g%3A1600781091048&ei=I_tpX529AouMlwSr4Zv4DQ&q=privacy+policy&oq=privacy+&gs_lcp=CgZwc3ktYWIQAxgAMgcIABCxAxBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgIIADICCAAyAggAMgIIADoECCMQJzoFCAAQsQM6AgguOgcILhAnEJMCOggIABCxAxCDAVDqcVi2eGDafmgAcAF4AIABoAOIAY0UkgEHMi0yLjUuMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab"
                      className="py-2 d-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.google.com/search?sxsrf=ALeKk02k1ttisizDoiIQp7XB5j4E4VMVEg%3A1600781109141&ei=NftpX-qmCI-LlwT87ZGQBg&q=faqs&oq=faqs&gs_lcp=CgZwc3ktYWIQAzIMCAAQsQMQQxBGEPkBMgQIABBDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIILjICCAA6BAgAEEc6BAgjECc6CggAELEDEIMBEEM6CAgAELEDEIMBUKmRAVjslQFg6JgBaABwBngAgAG1A4gBtAmSAQUzLTEuMpgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwiqlf6q7vzrAhWPxYUKHfx2BGIQ4dUDCA0&uact=5"
                      className="py-2 d-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker">
                      <FaMapMarkerAlt />
                    </span>
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="tel:+92-333-1234567">
                      <span className="icon icon-phone">
                        <FaPhoneAlt />
                      </span>
                      <span className="text">+2 333 123 4567</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@yourdomain.com">
                      <span className="icon icon-envelope">
                        <FaEnvelope />
                      </span>
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
