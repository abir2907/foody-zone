import styled from "styled-components";
import { BASE_URL } from "../../App";

const SearchResult = ({ data: foods }) => {
  return (
    <FoodCardsContainer>
      <FoodCards>
        {foods?.map((food) => (
          <FoodCard key={food.name}>
            <div className="food_image">
              <img src={BASE_URL + food.image} />
            </div>
          </FoodCard>
        ))}
      </FoodCards>
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

const FoodCard = styled.div``;
