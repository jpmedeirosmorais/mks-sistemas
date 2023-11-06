import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  padding-bottom: 5rem;

  @media (max-width: 1200px) {
    margin-top: 6rem;
  }
`;

const ListContainer = styled.div`
  display: flex;
  max-width: 93.6rem;
  gap: 2.2rem;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export { Container, ListContainer };
