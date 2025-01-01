import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component

const WorkSection: React.FC = () => {
  return (
    <section className="work section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 text-center">Selected Projects</h2>
          </div>

          <div className="col-lg-4 col-12">
            <div className="work-thumb mb-4">
              <div className="work-image-wrap">
                <Link href="/images/work/anthony-espinosa-pYQSM-p_0_c-unsplash.jpg" className="image-popup">
                  {/* Use the Image component from Next.js */}
                  <Image 
                    src="/images/work/anthony-espinosa-pYQSM-p_0_c-unsplash.jpg" 
                    alt="Simple Burger" 
                    width={600} 
                    height={400} 
                    className="img-fluid work-image" 
                  />
                </Link>
              </div>

              <div className="work-text-info">
                <small className="work-tag bg-white shadow-lg">Art Direction</small>
                <h4 className="work-title">Simple Burger</h4>
              </div>
            </div>

            <div className="work-thumb mb-4">
              <div className="work-image-wrap">
                <Link href="/images/work/samantha-gades-lf2pD--wIUA-unsplash.jpg" className="image-popup">
                  <Image 
                    src="/images/work/samantha-gades-lf2pD--wIUA-unsplash.jpg" 
                    alt="Fitness" 
                    width={600} 
                    height={400} 
                    className="img-fluid work-image" 
                  />
                </Link>
              </div>

              <div className="work-text-info">
                <small className="work-tag bg-white shadow-lg">Design</small>
                <h4 className="work-title">Fitness</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="work-thumb mb-4">
              <div className="work-image-wrap">
                <Link href="/images/work/business-chart-visual-graphics-report-concept.jpg" className="image-popup">
                  <Image 
                    src="/images/work/business-chart-visual-graphics-report-concept.jpg" 
                    alt="Data Science" 
                    width={600} 
                    height={400} 
                    className="img-fluid work-image" 
                  />
                </Link>
              </div>

              <div className="work-text-info">
                <small className="work-tag bg-white shadow-lg">Web Development</small>
                <h4 className="work-title">Data Science</h4>
              </div>
            </div>

            <div className="work-thumb mb-4">
              <div className="work-image-wrap">
                <Link href="/images/work/tyler-nix-HmVQh_EQJhY-unsplash.jpg" className="image-popup">
                  <Image 
                    src="/images/work/tyler-nix-HmVQh_EQJhY-unsplash.jpg" 
                    alt="Health" 
                    width={600} 
                    height={400} 
                    className="img-fluid work-image" 
                  />
                </Link>
              </div>

              <div className="work-text-info">
                <small className="work-tag bg-white shadow-lg">Branding</small>
                <small className="work-tag bg-white shadow-lg">Graphic Design</small>
                <h4 className="work-title">Health</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="work-thumb mb-4">
              <div className="work-image-wrap">
                <Link href="/images/work/mos-sukjaroenkraisri-jz8AmJDyhig-unsplash.jpg" className="image-popup">
                  <Image 
                    src="/images/work/mos-sukjaroenkraisri-jz8AmJDyhig-unsplash.jpg" 
                    alt="Portraits" 
                    width={600} 
                    height={400} 
                    className="img-fluid work-image" 
                  />
                </Link>
              </div>

              <div className="work-text-info">
                <small className="work-tag bg-white shadow-lg">Photography</small>
                <h4 className="work-title">Portraits</h4>
              </div>
            </div>

            <div className="work-thumb work-thumb-text">
              <div>
                <p className="work-title">
                  If you are interested in working together, Say Hi at <strong><Link href="mailto:hi@company.com">hi@company.com</Link></strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
