import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="terminal-kicker text-sm tablet:m-10">Contact.</h1>
          <div className="mt-10">
            <h1 className="tablet:m-10 text-3xl tablet:text-5xl laptop:text-6xl text-bold tracking-[0.06em]">
              LET&apos;S BUILD
            </h1>
            <h1 className="terminal-accent-text tablet:m-10 text-3xl tablet:text-5xl laptop:text-6xl text-bold tracking-[0.06em]">
              TOGETHER
            </h1>
            <div className="mt-10 tablet:m-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="terminal-muted-strong text-xs uppercase tracking-[0.18em] mt-2 laptop:mt-10 p-2 laptop:p-0">
        Built by{" "}
        <Link href="https://github.com/AybYrn">
          <a>Aybuke Yaren</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
