import styled from "styled-components";

const SearchResult = () => {
  return (
    <FoodCardsContainer>
      <FoodCards></FoodCards>
    </FoodCardsContainer>
  );
};

export default SearchResult;

const FoodCardsContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;
