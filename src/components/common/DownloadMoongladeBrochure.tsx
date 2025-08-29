import React, { useState } from "react";

function DownloadMoongladeBrochure() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !mobile || !consent) {
      alert("Please fill in all fields and provide consent before submitting.");
      return;
    }

    if (name && mobile && consent) {
      alert(
        "Thank you for contacting us! We have received your details and will get back to you soon."
      );

      setConsent(false);
      setName("");
      setMobile("");
    }
  };
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 bg-white items-end  py-6 sm:py-8 md:py-12 lg:pt-12 lg:pb-20  gap-5 sm:gap-3 md:gap-5 lg:gap-6">
      <div className="">
        <h3 className="font-['Prata'] text-primaryText  text-[54px] leading-[60px]">
          Download the <br /> Moonglade Brochure
        </h3>
        <p className="font-['Prata'] text-[#43474E] font-normal text-sm leading-4 md:leading-8  md:text-[18px]  mt-12">
          Please enter your details to download our brochure. Our team will get
          in touch with you and make sure your home buying journey is
          hassle-free
        </p>
      </div>

      <div className="" aria-label="Contact Form">
        <form
          className="flex flex-col gap-8 "
          autoComplete="off"
          onSubmit={handleSubmitButton}
        >
          <div>
            <label
              className="block text-primaryText font-['Prata'] font-normal text-sm md:text-base leading-[100%] tracking-[0] mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full font-['Prata'] font-normal text-sm md:text-base leading-[100%] tracking-[0] text-placeholderText bg-transparent border-0 border-b border-primaryText focus:ring-0 focus:border-primaryText placeholder:text-[#838383] pb-3 pl-1 outline-none"
              placeholder="Sushma Sethupathi"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label
              className="block text-primaryText font-['Prata'] font-normal text-sm md:text-base leading-[100%] tracking-[0] mb-2"
              htmlFor="mobile"
            >
              Mobile Number:
            </label>
            <input
              id="mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full font-['Prata'] font-normal text-sm md:text-base leading-[100%] tracking-[0] text-placeholderText  border-0 border-b border-primaryText focus:ring-0 focus:border-primaryText bg-transparent placeholder:text-[#838383] pb-3 pl-1 outline-none"
              placeholder="+91 7853218970"
              required
              aria-required="true"
              pattern="[0-9+\- ]{10,15}"
            />
          </div>

          <div className="flex gap-3 justify-start items-start">
            <input
              id="consent"
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="mt-1 w-4 h-4  cursor-pointer border-primaryText rounded-md checked:border-primaryText "
              required
              aria-required="true"
            />
            <label
              htmlFor="consent"
              className="font-['Prata'] font-normal text-xs md:text-sm text-primaryText leading-relaxed"
            >
              I authorize representatives of Moonglade to call, SMS, Email,
              or WhatsApp me about its products and offers. This consent
              overrides any registration for DNC/NDNC.
            </label>
          </div>

          <div className="pt-2 flex justify-start">
            <button
              className="font-['Prata'] text-secondaryText font-normal rounded-full text-sm md:text-21px  border border-secondaryText px-6 py-2 "
              type="submit"
            >
              Download Brochure
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DownloadMoongladeBrochure;
