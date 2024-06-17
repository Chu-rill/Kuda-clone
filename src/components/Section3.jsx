import React from "react";

function Section3() {
  return (
    <div className="kuda-section kuda-below--animation fade-active mt-[12.5%]">
      <div className="kuda-section--inner flex justify-around items-center">
        <div className="kuda-section--45">
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
            <p className="color-black kuda-section--max kuda-section font-normal ">
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
        <div className="kuda-section--55 w-[55%]">
          <div className=" relative ml-20">
            <img
              src="/section3/card6.png"
              className="w-[350px] h-[349px]"
              alt=""
            />
            <img
              src="/section3/card5.png"
              className="w-[340px] h-[235px] absolute left-[-25px] top-[115px]"
              alt=""
            />
            <img
              src="/section3/card4.png"
              className="w-[220px] h-[229px] absolute top-[40px] left-[-40px]"
              alt=""
            />
            <div className=" absolute top-[270px] left-[190px] ">
              <img
                src="/section3/card2.png"
                className="w-[100px] h-[99px] "
                alt=""
              />
              <img
                src="/section3/card1.png"
                className="w-[60px] h-[90px] absolute top-[30px] left-[15px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
