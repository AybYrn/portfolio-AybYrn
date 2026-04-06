import React from "react";

const WorkCard = ({ logo, name, role, dates, accomplishments, onClick }) => {
  return (
    <div
      className="terminal-panel terminal-card-grid rounded-[28px] p-6 laptop:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(24,54,45,0.18)] dark:hover:shadow-[0_26px_60px_rgba(0,0,0,0.38)] link"
      onClick={onClick}
    >
      <div className="relative z-10 flex items-start gap-4 pt-4">
        <img
          alt={name}
          className="h-14 w-14 rounded-2xl border border-[var(--terminal-panel-border)] bg-[rgba(255,255,255,0.88)] dark:bg-[#f5fff9] object-contain p-2.5 shadow-[0_0_30px_rgba(18,124,98,0.10)] dark:shadow-[0_0_30px_rgba(124,247,194,0.12)]"
          src={logo}
        ></img>
        <div className="min-w-0">
          <p className="terminal-kicker text-[11px]">experience.log</p>
          <h1 className="mt-2 text-xl laptop:text-2xl font-medium tracking-[0.04em]">
            {name ? name : "Company"}
          </h1>
          <h2 className="terminal-muted-strong mt-2 text-sm laptop:text-base tracking-[0.05em]">
            {role ? role : "Role"} {dates ? `• ${dates}` : ""}
          </h2>
        </div>
      </div>
      <ul className="terminal-muted-strong relative z-10 mt-6 space-y-3 text-sm laptop:text-[15px]">
        {(accomplishments || []).map((item, index) => (
          <li key={index} className="flex gap-3">
            <span className="terminal-inline-code mt-[0.35rem] flex-shrink-0">
              &gt;
            </span>
            <span className="leading-7 tracking-[0.04em]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
