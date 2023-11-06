import { colors } from "@/styles/designToken";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 3.4rem;
  background-color: ${colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 2rem;
`;

export { Container };
