import React from "react";
interface DownloadBrochurePropsType {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalTitle: React.Dispatch<React.SetStateAction<boolean>>;
}
const DownloadBrochure = ({
  setIsModalShow,
  setIsModalTitle,
}: DownloadBrochurePropsType) => {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="px-4 sm:px-[120px]">
        <div className="grid grid-cols-2 items-center gap-6 lg:gap-8">
          <h3 className="font-['Prata'] font-medium text-primaryText tracking-tight text-[14px] sm:text-[32px] lg:text-[35px] leading-tight">
            Where Everyday Feels Like A Getaway
          </h3>

          <div className="flex justify-end">
            <button
              onClick={() => {
                setIsModalShow(true);
                setIsModalTitle(true);
              }}
              type="button"
              className="font-['Prata'] inline-flex items-center justify-center bg-secondaryText text-white rounded-full px-6 sm:px-10 lg:px-16 py-3 sm:py-4 text-[12px] sm:text-[20px] lg:text-[24px] shadow-sm"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBrochure;
