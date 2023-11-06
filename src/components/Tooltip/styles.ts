import { colors } from "@/styles/designToken";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  max-width: 30rem;
  background-color: rgba(30, 30, 30, 0.9);

  color: ${colors.white};
  text-align: center;
  border-radius: 0.6rem;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  top: -1rem;
`;

const TooltipWrapperWithHover = styled(TooltipWrapper)`
  &:hover ${TooltipText} {
    visibility: visible;
  }
`;

export { TooltipWrapperWithHover, TooltipText };
