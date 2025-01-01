import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero d-flex justify-content-center align-items-center" id="section_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="heroText">
              <h1 className="text-white mb-lg-5 mb-4">
                We are ready to serve for your digital marketing
              </h1>

              <Link
                href="https://www.youtube.com/watch?v=AYaHuZ4BB6Y"
                passHref
                className="popup-youtube play-icon-wrap d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi-play play-icon"></i>
                <small>1:49 Minutes</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default HeroSection;
