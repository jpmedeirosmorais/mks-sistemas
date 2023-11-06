import { colors } from "@/styles/designToken";
import styled from "styled-components";

const Container = styled.div`
  width: 21.75rem;
  height: 28.5rem;
  border-radius: 0.8rem;
  background-color: ${colors.white};
  box-shadow: 0rem 0.2rem 0.8rem 0rem rgba(0, 0, 0, 0.14);
  position: relative;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    width: 25rem;
    height: 33rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 16rem;
  border-radius: 0.8rem 0.8rem 0 0;
  position: relative;
  @media (max-width: 800px) {
    height: 20rem;
  }
`;

const Title = styled.h3`
  color: ${colors.darkGray};
  font-size: 1.4rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: ${colors.darkGray};
  font-size: 1rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.6rem;
  padding-inline: 0.7rem;
  border-radius: 0.5rem;
  background-color: ${colors.gray};
  color: ${colors.white};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

const TitlePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  padding-inline: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9.3rem;
`;

const FooterButton = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: 0 0 0.8rem 0.8rem;
  width: 100%;
  height: 3.2rem;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
`;

export {
  Container,
  ImageContainer,
  Title,
  Description,
  Price,
  TitlePriceContainer,
  FooterButton,
  Body,
};
