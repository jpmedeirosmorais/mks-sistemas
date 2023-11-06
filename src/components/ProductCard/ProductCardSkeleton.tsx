import {
  Body,
  Container,
  Description,
  FooterButton,
  ImageContainer,
  Price,
  Title,
  TitlePriceContainer,
} from "./styles";

export const ProductCardSkeleton = () => {
  return (
    <Container data-testid="product-card-skeleton">
      <ImageContainer
        style={{
          backgroundColor: "#ccc",
          marginBottom: "0.2rem",
        }}
      />
      <Body>
        <TitlePriceContainer>
          <Title
            style={{
              backgroundColor: "#ccc",
              width: "45%",
              height: "1.5rem",
            }}
          />
          <Price
            style={{
              backgroundColor: "#ccc",
              width: "45%",
              height: "1.5rem",
            }}
          />
        </TitlePriceContainer>

        <Description
          style={{
            backgroundColor: "#ccc",
            width: "100%",
            height: "1.5rem",
          }}
        />
        <Description
          style={{
            backgroundColor: "#ccc",
            width: "100%",
            height: "1.5rem",
            marginBottom: "0.5rem",
          }}
        />
      </Body>
      <FooterButton
        style={{
          backgroundColor: "#ccc",
        }}
      />
    </Container>
  );
};
