import React from "react";
import Link from "next/link"; // Import Link for internal navigation
import '../public/styles/bootstrap-icons.css';
import '../public/styles/bootstrap.min.css';
import '../public/styles/magnific-popup.css';
import '../public/styles/tooplate-tween-agency.css';


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 me-auto mb-4">
            <h5 className="text-white mb-3">Newsletter</h5>
            <form className="custom-form subscribe-form mt-4" role="form">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-7">
                  <input
                    type="email"
                    name="subscribe-email"
                    id="subscribe-email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Your email address"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-5">
                  <button type="submit" className="form-control" id="subscribe">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-2 col-12 mx-auto my-lg-0 my-4">
            <h5 className="text-white mb-3">Services</h5>
            <ul className="footer-menu">
              <li className="footer-menu-item">
                <Link href="/digital-marketing" className="footer-menu-link">
                  Digital Marketing
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link href="/creative-ideas" className="footer-menu-link">
                  Creative Ideas
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link href="/branding" className="footer-menu-link">
                  Branding
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link href="/video-contents" className="footer-menu-link">
                  Video Contents
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-12">
            <h5 className="text-white mb-3">Say Hi</h5>
            <p className="text-white mb-1">Sunderland SR6 0JL, United Kingdom</p>
            <p>
              <Link href="mailto:email@company.com" className="footer-link">
                email@company.com
              </Link>
            </p>
          </div>

          <div className="site-footer-bottom mt-5">
            <div className="row pt-4">
              <div className="col-lg-6 col-12">
                <p className="copyright-text tooplate-link">
                  Copyright © 2022 Tween Agency Co., Ltd.
                  <br />
                  Design:{" "}
                  <Link
                    href="https://www.tooplate.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Tooplate
                  </Link>
                </p>
              </div>

              <div className="col-lg-3 col-12 ms-auto">
                <ul className="social-icon">
                  <li>
                    <Link href="#" className="social-icon-link bi-facebook" />
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/search?q=tooplate"
                      className="social-icon-link bi-twitter"
                    />
                  </li>
                  <li>
                    <Link href="#" className="social-icon-link bi-instagram" />
                  </li>
                  <li>
                    <Link href="#" className="social-icon-link bi-linkedin" />
                  </li>
                  <li>
                    <Link href="#" className="social-icon-link bi-youtube" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
