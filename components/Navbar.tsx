import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <Link href="/" className="navbar-brand">
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
              <Link href="#section_1" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_2" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_3" className="nav-link">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_4" className="nav-link">
                Our Work
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_5" className="nav-link">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#section_6" className="nav-link">
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
