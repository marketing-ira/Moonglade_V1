import React from "react";

function TailoredSpaceHeader() {
  return (
    <section id="#plans" className="py-[28px] sm:pt-[49px] sm:pb-[55px]">
      <div className="px-4 sm:px-[120px]">
        <header>
          <h2
            className="font-['Prata'] text-[24px] leading-[30px]
         text-primaryText font-medium md:text-[45px] md:leading-[50px] tracking-normal  "
          >
            Be seen where luxury <br className="md:hidden block" /> will follow
            you.
          </h2>

          <p className="mt-4 font-['Prata'] font-normal  text-[#43474E] text-[9px] tracking-normal sm:text-[16px] lg:text-[16px]">
            From spacious homes to high-end and opulent apartments, discover a
            home that matches your stature, complements your choices, and
            indulges your lifestyle.
          </p>
        </header>
      </div>
    </section>
  );
}

export default React.memo(TailoredSpaceHeader);
