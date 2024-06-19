import React from "react";

function Company() {
  return (
    <div>
      <div className="kuda-mobile--brand">
        <div className="flex flex-row align-center cursor-pointer">
          <span className="mr-2 flex items-center">
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.97399 9.79687L0.121736 5.33966C-0.0405785 5.15204 -0.0405785 4.84891 0.121736 4.6608L3.97399 0.203586C4.2083 -0.0678621 4.58953 -0.0678621 4.82426 0.203586C5.05858 0.475035 5.05858 0.91559 4.82426 1.18704L1.81142 4.67351C1.64916 4.86128 1.64917 5.13965 1.81146 5.3274L4.82426 8.81293C5.05858 9.08487 5.05858 9.52542 4.82426 9.79687C4.58953 10.0683 4.2083 10.0683 3.97399 9.79687Z"
                fill="#40196D"
              ></path>
            </svg>
            <span class="color-primary text-sm ml-3">Back</span>
          </span>
        </div>
        <span className="closeMenu animated fadeIn cursor-pointer">
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
      <div class="kuda-mobile--navWrap show-options">
        <div class="nav-menu-wrap flex flex-column">
          <div className="navigation-menu">
            <div className="navigation-menu-trigger">Company</div>
            <div className="navigation-menu-content company">
              <p className="navigation-menu-item">Blog</p>
              <p className="navigation-menu-item">Press</p>
              <p className="navigation-menu-item">Join Our Team</p>
              <p className="navigation-menu-item">About Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
