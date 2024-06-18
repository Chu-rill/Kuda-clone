// import React from "react";

// export default Menu;
import React from "react";

function Menu() {
  const handleHamburgerClick = () => {
    // Toggle the mobile menu wrapper
    document.querySelector(".mobile-menu-wrap").classList.remove("active");
  };

  return (
    <div className="kuda-mobile--menu">
      <div className="mobile-container">
        <div className="kuda-menu--wrap">
          <div className="kuda-footer--nav flex flex-column">
            <div className="kuda-mobile--brand">
              <a
                exact="true"
                className="kuda-brand"
                href="/en-ng/"
                aria-current="page"
              >
                {/* <svg width="99" height="22" viewBox="0 0 99 22" fill="none">

                </svg> */}
              </a>
              <span
                className="closeMenu animated fadeIn cursor-pointer"
                onClick={handleHamburgerClick}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.61414"
                    y="0.500275"
                    width="21"
                    height="2"
                    rx="1"
                    transform="rotate(45 1.61414 0.500275)"
                    fill="#40196D"
                  ></rect>
                  <rect
                    x="0.614136"
                    y="15.5003"
                    width="21"
                    height="2"
                    rx="1"
                    transform="rotate(-45 0.614136 15.5003)"
                    fill="#40196D"
                  ></rect>
                </svg>
              </span>
            </div>

            <div className="kuda-mobile--navWrap">
              <div className="kuda-menu--actions flex">
                <a
                  className="kuda-mobile--action kuda-cta kuda-cta-md mr-3 kuda_web"
                  href="/joinKuda/"
                >
                  Join Kuda
                </a>
                <a
                  target="_blank"
                  href="https://app.kuda.com"
                  class="kuda-mobile--action kuda-cta kuda-cta-md kuda-cta-v2 cta_button"
                >
                  Sign In
                </a>
              </div>
              <div className="flex flex-column">
                <div className="nav-menu-wrap flex flex-column">
                  <div className="kuda-mobile--menu-item">
                    <p className="footer-header text-bold  color-primary">
                      Personal
                    </p>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M11 8.50004L6.5 3.88124L6.5 13.1188L11 8.50004Z"
                        fill="#40196D"
                      ></path>
                    </svg>
                  </div>
                  <div className="kuda-mobile--menu-item">
                    <p className="footer-header text-bold  color-primary">
                      Business
                    </p>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M11 8.50004L6.5 3.88124L6.5 13.1188L11 8.50004Z"
                        fill="#40196D"
                      ></path>
                    </svg>
                  </div>
                  <div className="kuda-mobile--menu-item">
                    <p className="footer-header text-bold  color-primary">
                      Company
                    </p>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M11 8.50004L6.5 3.88124L6.5 13.1188L11 8.50004Z"
                        fill="#40196D"
                      ></path>
                    </svg>
                  </div>
                  <a
                    className="kuda-mobile--menu-item"
                    href="https://developer.kuda.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="footer-header text-bold  color-primary">
                      Developers
                    </p>
                  </a>
                  <a className="kuda-mobile--menu-item" href="/contact/">
                    <p className="footer-header text-bold  color-primary">
                      Contact Us
                    </p>
                  </a>
                  <div className="kuda-mobile--menu-item">
                    <p className="footer-header text-bold  color-primary">
                      Help
                    </p>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M11 8.50004L6.5 3.88124L6.5 13.1188L11 8.50004Z"
                        fill="#40196D"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
