import { colors } from "@/styles/designToken";
import styled from "styled-components";

const ToastsContainer = styled.div`
  position: fixed;
  top: 11rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 10rem;

  @media (max-width: 800px) {
    top: 6rem;
    left: 0;
    width: 100%;
    padding-inline: 1rem;
  }
`;

const ToastContainer = styled.div`
  background-color: ${colors.darkGray};
  color: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  max-width: 30rem;
`;

export { ToastsContainer, ToastContainer };
