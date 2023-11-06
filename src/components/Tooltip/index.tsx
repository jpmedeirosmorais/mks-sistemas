import React, { useState } from "react";
import styled from "styled-components";
import { TooltipProps } from "./interfaces";
import { TooltipText, TooltipWrapperWithHover } from "./styles";

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <TooltipWrapperWithHover
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <TooltipText>{text}</TooltipText>}
    </TooltipWrapperWithHover>
  );
};
