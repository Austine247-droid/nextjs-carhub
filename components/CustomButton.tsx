"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { Children } from "react";

const CustomButton = ({
  // children,
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
