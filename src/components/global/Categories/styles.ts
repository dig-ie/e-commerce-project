import styled from "styled-components";

export const CategoryBarContainer = styled.nav`
  background-color: gray;
  grid-column: span 12;
  height: auto;
  min-height: 40px;
  display: flex;
  grid-column: span 12;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CategoryName = styled.span`
  font-size: 14px;
  color: black;
  max-width: 100%;
  color: black;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 5px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: orange;
  }
`;
