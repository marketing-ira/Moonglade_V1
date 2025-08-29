import React, { FC } from "react";
interface ButtonPropTypes {
  label: string;
  submit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const BorderButton: FC<ButtonPropTypes> = ({ label, submit }) => {
  return (
    <button
      onClick={submit}
      className="font-['Prata'] text-primaryTitleText border-bgPrimary font-bold rounded-full text-[9px] leading-[11px] md:text-lg lg:text-xl tracking-tighter border px-3 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3"
    >
      {label}
    </button>
  );
};

export default BorderButton;
