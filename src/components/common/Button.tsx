import React from "react";

interface ButtonProps {
  label: string;
  onclick?: () => void;
}

function Button({ onclick, label }: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className="font-['Prata'] font-normal text-primaryTitleText bg-bgButton rounded-full text-lg tracking-tighter py-2 px-6 sm:px-8"
    >
      {label}
    </button>
  );
}

export default Button;
