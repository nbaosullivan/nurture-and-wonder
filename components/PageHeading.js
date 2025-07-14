import React from "react";

export default function PageHeading({ children, className = "" }) {
  return (
    <h1 className={`text-brand-primary text-center text-3xl font-bold lg:text-4xl lg:leading-snug ${className}`}>
      {children}
    </h1>
  );
} 