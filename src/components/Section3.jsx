import React from "react";

function Section3() {
  return (
    <div className="kuda-section kuda-below--animation fade-active mt-[12.5%]">
      <div className="kuda-section--inner flex justify-between align-center">
        <div className="kuda-section--45 w-[45%]">
          <div className="kuda-section--wrap max-w-[420px]">
            <h1 className="kuda-section--heading text-xlbold color-primary title-bottom--spacing">
              <span>
                Your phone +
                <br />
                our app +
                <br />
                a debit card =
                <br />a simpler life.
              </span>
            </h1>
            <p className="color-black kuda-section--max kuda-section">
              We designed a money app for your lifestyle, and you can get a
              debit card to go with it. That's all you need to make the right
              money moves.
            </p>
            <a
              href="#"
              className="learn-more color-primary flex align-center  cta_button"
            >
              <span className="learn-more--icon">
                Open An Account in Minutes
              </span>
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
