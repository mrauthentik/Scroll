import React from "react";
import useScrollTo from "./ScrollTo";

interface ScrollToButtonProps {
  height: number;
  label?: string;
  behavior?: ScrollBehavior;
  offset?: number;
}

const ScrollToButton: React.FC<ScrollToButtonProps> = ({ height, label = "Scroll", behavior = "smooth", offset = 0 }) => {
  const scrollToHeight = useScrollTo();

  return (
    <button onClick={() => scrollToHeight(height, { behavior, offset })}>
      {label}
    </button>
  );
};

export default ScrollToButton;
