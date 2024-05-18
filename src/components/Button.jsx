import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-secondary-color",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 font-semibold border hover:border-secondary-color checked:outline-secondary-color checked:outline checked:border checked:border-black hover:bg-opacity-60 duration-300 w-fit py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}