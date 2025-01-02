import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 992); // 992px is the breakpoint for large screens
    };

    // Initial check for screen size
    checkScreenSize();

    // Add event listener for scroll and resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        isSmallScreen || scrolling
          ? "bg-white navbar-dark shadow"
          : "bg-transparent navbar-light"
      }`}
    >
      <div className="container">
        <Link
          href="/"
          className={`navbar-brand ${isSmallScreen || scrolling ? "text-dark" : "text-white"}`}
        >
          <i className="bi-layers"></i> Tween
        </Link>

        <Link href="#" className="custom-btn btn btn-lg d-lg-none ms-auto me-4">
          Download
          <i className="bi-download ms-2"></i>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <Link
                href="#section_1"
                className={`nav-link ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#section_2"
                className={`nav-link ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#section_3"
                className={`nav-link ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#section_4"
                className={`nav-link ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              >
                Our Work
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#section_5"
                className={`nav-link ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="#section_6"
                className={`nav-link ${
                  scrolling ? "text-secondary" : "text-white"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="ms-auto d-none d-lg-block">
            <Link href="#" className="custom-btn btn btn-lg">
              Download
              <i className="bi-download ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
