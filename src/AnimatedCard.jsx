import React from "react";

const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <div
      className="transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
