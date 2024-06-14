import React from "react";

function Section6() {
  return (
    <div className="kuda-section fade-active mt-[12.5%]">
      <div className="kuda-section--inner flex justify-between align-center mobile-reverse">
        <div></div>
        <div className="kuda-section--45 kuda-text--right w-[45%]">
          <div className="kuda-section--wrap">
            <h1 className="kuda-section--heading text-xlbold color-primary title-bottom--spacing">
              Turn off access, turn on safety.
            </h1>
            <p className="color-black kuda-section--max font-normal text-sm">
              Life happens. Milk spills. Debit cards go missing. If that ever
              happens, you can block your missing card on the app so no one can
              use it. We’d like to see them try.
            </p>
            <a
              className="learn-more color-primary flex align-center  cta_button"
              href="/cards"
            >
              <span class="learn-more--icon">Learn more about Cards</span>
              <span class="arrow-right--icon">
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

export default Section6;
