import React from "react";

function Section8() {
  return (
    <div className="kuda-section fade-active mt-[12.5%]">
      <div className="kuda-section--inner flex justify-between items-center mobile-reverse">
        <div className="kuda-section--55 w-[55%]">
          <img src="/screen3.png" className="w-[450px] h-[450px] icon" alt="" />
        </div>
        <div className="kuda-section--45 kuda-text--right ">
          <div className="kuda-section--wrap">
            <h1 className="kuda-section--heading text-xlbold color-primary title-bottom--spacing">
              {" "}
              Fees as clear as glass.
            </h1>
            <p className="color-black kuda-section--max font-normal ">
              We’re serious about free banking, and we will never, ever charge
              you for anything without your consent.
            </p>
            <p className="learn-more color-primary flex align-center  cta_button font-normal text-sm">
              <span className="learn-more--icon">See all our fees</span>
              <span className="arrow-right--icon">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1.86859L1.39309 0.498047L8 6.99805L1.39309 13.498L0 12.1275L5.21383 6.99805L0 1.86859Z"
                    fill="#40196D"
                  ></path>
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
