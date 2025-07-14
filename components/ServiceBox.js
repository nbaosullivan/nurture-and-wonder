import React from "react";

// Icon should be passed as a component, color as a Tailwind class string
export default function ServiceBox({ title, description, icon: Icon, color }) {
  return (
    <div
      className={
        "relative flex flex-col items-center px-8 pb-8 md:px-10 md:pb-10 shadow-md transition-all duration-300 group border-b-4 border-r-4 border-peach-blush-dark hover:border-b-4 hover:border-r-4 hover:border-transparent hover:shadow-xl hover:-translate-y-1 bg-peach-blush overflow-visible " +
        "rounded-lg rounde-b-lg md:[border-top-left-radius:9999px] md:[border-top-right-radius:9999px] md:rounded-b-lg "
      }
      style={{
        minHeight: '380px',
      }}
    >
      {/* Offset Icon Circle, overlapping arch and card, off-center */}
      <div
        className={`absolute -top-6 left-[15%] w-20 h-20 flex items-center justify-center rounded-full border-4 border-white ${color} z-10 shadow-md`}
        style={{ zIndex: 2 }}
      >
        <Icon className="w-12 h-12 text-cloud-white" />
      </div>
      <div className="pt-20 w-full flex flex-col items-center z-20">
        <h2 className="text-2xl font-bold mt-2 text-center text-mountain-purple">{title}</h2>
        <p className="text-lg md:text-xl mt-3 font-normal leading-relaxed text-center text-evergreen mb-10">{description}</p>
      </div>
    </div>
  );
} 