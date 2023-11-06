import { colors } from "@/styles/designToken";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 6.5rem;

  .brand-title {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    h1 {
      font-size: 4rem;
      font-weight: 600;
      line-height: 1.9rem;
    }

    h2 {
      margin-top: 1.5rem;
      font-size: 2rem;
      font-weight: 300;
      line-height: 1.9rem;
    }
  }

  @media (max-width: 800px) {
    height: 4.4rem;
    padding-inline: 2rem;
    position: fixed;
    top: 0;
    z-index: 1;
    .brand-title {
      gap: 0.6rem;

      h1 {
        font-size: 3.2rem;
      }

      h2 {
        margin-top: 1.2rem;
        font-size: 1.6rem;
      }
    }
  }
`;
