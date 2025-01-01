import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

const DigitalServices: React.FC = () => {
  return (
    <section className="services section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <h2 className="mb-5 text-center">Digital Services</h2>

          <div className="col-lg-4 col-12 d-flex bg-primary p-0">
            <Image
              src="/images/services/undraw_Online_page_re_lhgx.svg"
              className="img-fluid services-image"
              alt="UI Design"
              width={500} // adjust as needed
              height={300} // adjust as needed
            />
          </div>

          <div className="col-lg-4 col-12 p-0">
            <div className="services-info custom-icon-left paddingText">
              <h4>UI Design</h4>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing industry
              </p>
              <Link href="/ui-design">
                <div className="custom-btn custom-bg-dark btn">Learn More</div>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-flex bg-warning p-0">
            <Image
              src="/images/services/undraw_online_transactions_02ka.svg"
              className="img-fluid services-image"
              alt="Marketing"
              width={500} // adjust as needed
              height={300} // adjust as needed
            />
          </div>

          <div className="col-lg-4 col-12 p-0 order-lg-0 order-sm-5">
            <div className="services-info custom-icon-right paddingText">
              <h4>Marketing</h4>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing industry
              </p>
              <Link href="/marketing">
                <div className="custom-btn custom-bg-dark btn">Learn More</div>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-12 d-flex bg-success p-0 order-lg-0 order-sm-4">
            <Image
              src="/images/services/undraw_content_team_3epn.svg"
              className="img-fluid services-image"
              alt="Ecommerce"
              width={500} // adjust as needed
              height={300} // adjust as needed
            />
          </div>

          <div className="col-lg-4 col-12 p-0">
            <div className="services-info custom-icon-top paddingText">
              <h4>Ecommerce</h4>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing industry
              </p>
              <Link href="/ecommerce">
                <div className="custom-btn custom-bg-dark btn">Learn More</div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
