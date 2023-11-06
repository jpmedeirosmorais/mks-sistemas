import styled from "styled-components";
import { colors } from "@/styles/designToken";
import { DrawerProps } from "./interfaces";

const DrawerContainer = styled.div<DrawerProps>`
  z-index: 2;
  width: 48.6rem;
  height: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  position: fixed;
  box-shadow: -0.5rem 0rem 0.6rem 0rem rgba(0, 0, 0, 0.13);
  top: 0;
  right: ${(props) => (props.open ? "0" : "-48.6rem")};
  transition: right 0.3s ease-in-out;

  @media (max-width: 800px) {
    max-width: 100%;
    width: 33rem;
  }
`;

const DrawerButton = styled.div`
  :hover {
    cursor: pointer;
  }

  height: 4.5rem;
  color: ${colors.black};
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.8rem;
  font-weight: 700;

  @media (max-width: 800px) {
    height: 2.6rem;
    padding-inline: 1rem;
    gap: 1rem;
    font-size: 1.2rem;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const DrawerContent = styled.div`
  height: 100%;
  position: relative;
`;

const DrawerTitle = styled.h2`
  padding: 4.7rem;
  color: ${colors.white};
  font-size: 2.7rem;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 800px) {
    width: 70%;
    display: flex;
    padding: 3.2rem 0 3.2rem 3.2rem;
    font-size: 2.7rem;
  }
`;

const ListProducts = styled.div`
  padding-left: 4.7rem;
  padding-top: 0.8rem;
  max-height: calc(100vh - 4.5rem - 4.7rem - 4.7rem - 10rem - 4.7rem - 4.7rem);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow-y: auto;

  @media (max-width: 800px) {
    padding-left: 3.2rem;
    padding-top: 0.8rem;
    max-height: calc(
      100vh - 2.6rem - 3.2rem - 3.2rem - 12rem - 3.2rem - 3.2rem
    );
    gap: 1.3rem;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  font-size: 2.7rem;
  font-weight: 700;
  justify-content: center;
  align-items: end;
`;

const Close = styled.button`
  z-index: 3;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 2.1rem;
  font-weight: 400;
  border: none;
  margin-right: 3rem;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    width: 4.6rem;
    height: 4.6rem;
    font-size: 3rem;
    margin-right: 1.5rem;
    color: ${colors.blue};
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DrawerFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.7rem;
  p {
    color: ${colors.white};
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
  }

  @media (max-width: 800px) {
    padding: 3.2rem;
  }
`;

const ButtonFooter = styled.button`
  border: none;
  background-color: ${colors.black};
  color: ${colors.white};
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    height: 7.5rem;
    font-size: 2rem;
  }
`;

export {
  DrawerContainer,
  DrawerButton,
  DrawerContent,
  ListProducts,
  DrawerTitle,
  Close,
  DrawerHeader,
  DrawerFooter,
  Total,
  ButtonFooter,
  EmptyCart,
};
