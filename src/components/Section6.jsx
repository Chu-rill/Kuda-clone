import React from "react";

function Section6() {
  return (
    <div className="kuda-section fade-active mt-[12.5%]">
      <div className="kuda-section--inner flex justify-between items-center mobile-reverse">
        <div className="kuda-section--45 ">
          {/* <div className=" relative">
            <img src="/sec6/img4.png" className=" w-[400px] h-[399px]" alt="" />
            <img
              src="/sec6/img1.png"
              className=" absolute top-[10px] w-[400px] h-[130px]"
              alt=""
            />
            <img
              src="/screen6.png"
              className="w-[100px] h-[50px] absolute left-[270px] top-[50px]"
              alt=""
            />
            <img
              src="/sec6/img3.png"
              className=" absolute top-[110px] left-[38px] w-[290px] h-[370px]"
              alt=""
            />
            <img
              src="/sec6/img2.png"
              className="w-[120px] h-[100px] absolute top-[210px] left-[270px]"
              alt=""
            />
          </div> */}
          <img src="/screen5.png" className="w-[450px] h-[450px] icon" alt="" />
        </div>
        <div className="kuda-section--45 kuda-text--right ">
          <div className="kuda-section--wrap">
            <h1 className="kuda-section--heading text-xlbold color-primary title-bottom--spacing">
              Turn off access, turn on safety.
            </h1>
            <p className="color-black kuda-section--max font-normal ">
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
