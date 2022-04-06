import styled from "styled-components";
const RecipeContainer = styled.section`
  .container {
    display: flex;
    width: 80%;
    margin: 20px auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

const Form = styled.section`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
  }
  input {
    width: 20%;
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 10px;
  }
  input:focus,
  input:active {
    border: 1px solid #04e762;
  }

  button {
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #04e762;
    transition: all 0.7s;
    cursor: pointer;
  }
  button:hover {
    background-color: #fd5942;
    transition: all 0.7s;
    color: #fff;
  }
`;
export { Form, RecipeContainer };
