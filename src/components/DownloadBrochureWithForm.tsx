import React, { useState } from "react";

function DownloadBrochureWithForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !mobile || !consent) {
      alert("Please provide your name, mobile number, and consent.");
      return;
    }
    alert("Thanks! Your brochure will be shared with you shortly.");
    setName("");
    setMobile("");
    setConsent(false);
  };

  return (
    <section className="px-4 sm:px-[120px] pt-7 pb-8 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-start md:items-end">
        {/* Left copy */}
        <div>
          <h2 className="  font-['Prata'] md:font-medium text-[24px] leading-[30px] sm:[30px] sm:leaidng-[36px]  md:text-[49px] md:leading-[55px] text-primaryText tracking-normal ">
            Download the <br /> Moonglade Brochure
          </h2>
          <p className="mt-6 font-['Prata'] font-normal text-[#43474E] text-[11px] leading-[15px] md:text-[15px] md:leading-[18px] tracking-normal    ">
            Please enter your details to download our brochure. Our team will
            get in touch with you and make sure your home buying journey is
            hassle-free
          </p>
        </div>

        {/* Right form */}
        <form className="w-full" onSubmit={onSubmit} noValidate>
          {/* Name */}
          <label
            htmlFor="db-name"
            className="block font-['Prata'] text-primaryText text-[16px] md:text-[20px]"
          >
            Name:
          </label>
          <input
            id="db-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 w-full bg-transparent outline-none border-0 border-b border-[#C9C9C9] focus:border-secondaryText font-['Prata'] text-[18px] md:text-[24px] text-placeholderText pb-3"
          />

          {/* Mobile */}
          <label
            htmlFor="db-mobile"
            className="block mt-8 font-['Prata'] text-primaryText text-[16px] md:text-[20px]"
          >
            Mobile Number:
          </label>
          <input
            id="db-mobile"
            type="tel"
            inputMode="tel"
            pattern="[0-9+\- ]{10,15}"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-3 w-full bg-transparent outline-none border-0 border-b border-[#C9C9C9] focus:border-secondaryText font-['Prata'] text-[18px] md:text-[24px] text-placeholderText pb-3"
          />

          {/* consent */}
          <div className="mt-6 flex items-start gap-3">
            <input
              id="db-consent"
              type="checkbox"
              checked={consent}
              onChange={() => setConsent((s) => !s)}
              className="mt-1 h-4 w-4 rounded border border-[#C9C9C9]"
            />

            <label
              htmlFor="db-consent"
              className="font-['Prata'] font-normal text-[7px] tracking-[1px] text-primaryText md:text-[14px]    "
            >
              I authorize representatives of IRA Aspiration to call, SMS, Email,
              or WhatsApp me about its products and offers. This consent
              overrides any registration for DNC/NDNC.
            </label>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="font-['Prata'] text-secondaryText border-[0.5px] md:border-[1px] border-secondaryText rounded-full px-6 py-2 md:px-10 md:py-3 text-[12px] font-normal md:text-[24px] tracking-normal leading-[100%] hover:bg-secondaryText hover:text-white transition-colors"
            >
              Download Brochure
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DownloadBrochureWithForm;
