import { styled } from "styled-components";
import { colors } from "@/styles/designToken";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  .lds {
    display: inline-block;
    position: relative;
    width: 8rem;
    height: 8rem;
  }
  .lds div {
    display: inline-block;
    position: absolute;
    left: 0.8rem;
    width: 1.6rem;
    background: ${colors.blue};
    animation: lds 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds div:nth-child(1) {
    left: 0.8rem;
    animation-delay: -0.24s;
  }
  .lds div:nth-child(2) {
    left: 3.2rem;
    animation-delay: -0.12s;
  }
  .lds div:nth-child(3) {
    left: 5.6rem;
    animation-delay: 0;
  }
  @keyframes lds {
    0% {
      top: 0.8rem;
      height: 6.4rem;
    }
    50%,
    100% {
      top: 2.4rem;
      height: 3.2rem;
    }
  }
`;
