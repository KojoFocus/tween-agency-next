import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const PricingSection: React.FC = () => {
  return (
    <section className="pricing section-padding" id="section_5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white mb-5 text-center">Tween Marketing Plans</h2>
          </div>

          {/* Sufficient Plan */}
          <div className="col-lg-6 col-12">
            <div className="pricing-plan bg-white">
              <div className="d-flex flex-wrap align-items-center pricing-header">
                <i className="pricing-icon bi-person" aria-hidden="true"></i>
                <div className="pricing-name">
                  <h4>Sufficient</h4>
                </div>
                <div className="pricing-price">
                  <h4>$4,600</h4>
                </div>
                <small className="pricing-recommend" aria-label="Recommended Plan">Recommended Plan</small>
              </div>

              <div className="pricing-body">
                <h5 className="mb-3">Managed Features</h5>
                <ul className="pricing-list">
                  <li className="pricing-list-item">Fully Digital</li>
                  <li className="pricing-list-item">Social Media Management</li>
                  <li className="pricing-list-item">Website Optimizations</li>
                  <li className="pricing-list-item">24/7 Phone Calls and Emails</li>
                </ul>

                <h5 className="mt-lg-5 mt-4 mb-3">Small to Mid-size Businesses</h5>
                <p>Everything you need for your digital marketing needs.</p>
                
                {/* Add a Link for CTA */}
                <Link href="#contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Complete Plan */}
          <div className="col-lg-6 col-12 mt-lg-0 mt-5">
            <div className="pricing-plan border-0 bg-white shadow-lg">
              <div className="d-flex flex-wrap align-items-center pricing-header">
                <i className="pricing-icon bi-briefcase" aria-hidden="true"></i>
                <div className="pricing-name">
                  <h4>Complete</h4>
                </div>
                <div className="pricing-price">
                  <h4>$8,200</h4>
                </div>
                <small className="pricing-recommend" aria-label="Ecommerce Plan">Ecommerce Plan</small>
              </div>

              <div className="pricing-body">
                <h5 className="mb-3">Fully Featured Work</h5>
                <ul className="pricing-list">
                  <li className="pricing-list-item">Completely Digital</li>
                  <li className="pricing-list-item">Everything Managed Online</li>
                  <li className="pricing-list-item">Full Ecommerce Features</li>
                  <li className="pricing-list-item">24/7 Instant Video Chats</li>
                </ul>

                <h5 className="mt-lg-5 mt-4 mb-3">High-end Ecommerce Websites</h5>
                <p>Fit for your company and ecommerce needs.</p>

                {/* Add a Link for CTA */}
                <Link href="#contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="overlay dark-overlay" aria-hidden="true"></div>
    </section>
  );
};

export default PricingSection;
