import React from "react";

function Section7() {
  return (
    <div className="kuda-section kuda-below--animation fade-active mt-[12.5%]">
      <div className="kuda-section--inner flex justify-between items-center">
        <div className="kuda-section--45 w-[45%]">
          <div className="kuda-section--wrap max-w-[420px]">
            <h1 className="kuda-section--heading text-xlbold color-primary title-bottom--spacing">
              We’re always happy to help you.
            </h1>
            <p className="color-black kuda-section--max font-normal">
              You can chat with us on the app, slide into our DMs, tweet, leave
              an Instagram comment, send an email or call. However you choose to
              reach out, there’ll always be a friendly person there to make your
              life easy.
            </p>
            <a
              href="https://help.kuda.com"
              target="_blank"
              rel="noopener noreferrer"
              class="learn-more color-primary flex align-center  cta_button"
            >
              <span className="learn-more--icon">Get Help</span>
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
        <div className="kuda-section--55 w-[55%]">
          <img src="/screen2.png" className="w-[450px] h-[450px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section7;
