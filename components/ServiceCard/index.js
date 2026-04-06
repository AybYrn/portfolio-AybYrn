import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`terminal-panel terminal-card-grid w-full rounded-[28px] p-6 mob:p-6 transition-all ease-out duration-300 ${
        mounted && theme === "dark"
          ? "hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(0,0,0,0.34)]"
          : "hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(15,23,42,0.12)]"
      } link`}
    >
      <div className="relative z-10 pt-4">
        <p className="terminal-kicker text-[11px]">focus-area</p>
        <h1 className="mt-3 text-2xl laptop:text-3xl tracking-[0.04em]">
          {name ? name : "Heading"}
        </h1>
      </div>
      <p className="terminal-readable relative z-10 mt-5 text-base laptop:text-lg">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ServiceCard;
