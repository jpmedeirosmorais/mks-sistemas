import { colors } from "@/styles/designToken";
import styled from "styled-components";

const Container = styled.div`
  width: 37.9rem;
  height: 9.5rem;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  box-shadow: -0.2rem 0.2rem 1rem 0rem rgba(0, 0, 0, 0.05);
  position: relative;
  padding-right: 1rem;

  @media (max-width: 800px) {
    width: 25rem;
    height: 22rem;
    flex-direction: column;
    padding-right: 0;
  }
`;

const ImageContainer = styled.div`
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 0.8rem 0 0 0.8rem;
  position: relative;
  img {
    border-radius: 0.8rem 0 0 0.8rem;
  }

  @media (max-width: 800px) {
    width: 25rem;
    height: 40rem;
    border-radius: 0.8rem 0.8rem 0 0;

    img {
      border-radius: 0.8rem 0.8rem 0 0;
    }
  }
`;

const Title = styled.h3`
  color: ${colors.darkGray};
  font-size: 1.3rem;
  font-weight: 500;
  max-width: 10rem;

  @media (max-width: 800px) {
    font-size: 1.6rem;
    max-width: 25rem;
    font-weight: 400;
  }
`;

const Qtd = styled.div`
  color: ${colors.black};
  width: 5rem;
  height: 1.9rem;
  border-radius: 0.4rem;
  border: 0.3px solid ${colors.gray};
  display: flex;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    width: 9.7rem;
    height: 3.48rem;
  }
`;

const Minus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  border-right: 0.3px solid ${colors.gray};

  @media (max-width: 800px) {
    font-size: 2.4rem;
  }
`;

const Plus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 0.3px solid ${colors.gray};
  width: 33.3%;

  @media (max-width: 800px) {
    font-size: 2.4rem;
  }
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

const RemoveAll = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 1.1rem;
  font-weight: 400;
  position: absolute;
  top: -0.7rem;
  right: -0.7rem;
  border: none;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    width: 2.4rem;
    height: 2.4rem;
    font-size: 4.2rem;
    top: 0.5rem;
    right: 1.5rem;
    background-color: transparent;
    color: ${colors.black};
  }
`;

const Price = styled.div`
  color: ${colors.black};
  font-size: 1.4rem;
  font-weight: 700;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.48rem;
    padding-inline: 1.5rem;
    border-radius: 0.5rem;
    background-color: ${colors.gray};
    color: ${colors.white};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
`;

const QtdAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
    padding-inline: 1rem;
    gap: 0;
  }
`;

export {
  Container,
  ImageContainer,
  Title,
  Qtd,
  Price,
  Minus,
  Plus,
  RemoveAll,
  Quantity,
  QtdAndPrice,
};
