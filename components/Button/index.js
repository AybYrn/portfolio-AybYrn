import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-xs tablet:text-sm px-3 py-2 m-1 laptop:m-2 rounded-xl border uppercase tracking-[0.2em] ${
          isDark
            ? "border-[#7cf7c266] bg-[#091412] text-[#d8ffee] hover:bg-[#0d1d19]"
            : "border-black/20 bg-white/80 text-black hover:bg-white"
        } transition-all duration-300 ease-out first:ml-0 hover:-translate-y-0.5 active:translate-y-0 link ${
          data.showCursor && "cursor-none"
        }  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-xs tablet:text-sm px-3 py-2 m-1 laptop:m-2 rounded-xl border flex items-center uppercase tracking-[0.18em] transition-all ease-out duration-300 ${
        isDark
          ? "border-transparent text-[#b8d9cc] hover:border-[#7cf7c240] hover:bg-[#0c1917] hover:text-[#d8ffee]"
          : "border-transparent text-black/80 hover:border-black/10 hover:bg-slate-100"
      } hover:-translate-y-0.5 active:translate-y-0 tablet:first:ml-0 ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
