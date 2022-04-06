import React from "react";
import styled from "styled-components";
const Recipe = ({ title, calories, imgUrl, labels }) => {
  return (
    <RecipeCard>
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {title}</h5>
          <p className="card-text">
            Cals: {niceCalories(calories)} <em>cals</em>
          </p>
          <div className="labs">
            {labels.slice(0, 6).map((label, index) => (
              <p key={index}>{label}</p>
            ))}
          </div>
        </div>
      </div>
    </RecipeCard>
  );
};

const niceCalories = (cal) => {
  return Math.round(cal);
};
const RecipeCard = styled.section`
  width: 23%;
  .card {
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 13px 0px #737373;
    box-shadow: 0px 0px 13px 0px #737373;
    margin: 20px 0;
  }
  .card-body {
    padding: 10px 30px;
  }
  .card-img-top {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .labs {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .labs p{
    font-size: 10px;
    background-color: #b6f9c9;
    padding: 8px 10px;
    border-radius: 20px;
  }
  }
`;
export default Recipe;
