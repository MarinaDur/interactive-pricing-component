import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$flex === "row" ? "row" : "column")};
  gap: ${(props) => (props.$type === "main" ? "1rem" : "0.5rem")};

  ${(props) =>
    props.$display === "default"
      ? css`
          justify-content: center;
          align-items: center;
        `
      : ""}

  ${(props) =>
    props.$display === "right"
      ? css`
          justify-content: flex-end;
          align-items: center;
        `
      : ""}

     @media (min-width: 590px) {
    flex-direction: ${(props) =>
      props.$screenSize === "large" ? "row" : "colimn"};
  }
`;

export default Container;
