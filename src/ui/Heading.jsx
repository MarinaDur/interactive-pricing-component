import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      color: var(--color-dark-desaturated-blue-text-CTA-background);
      font-weight: 800;
      margin-top: 10rem;

      @media (min-width: 790px) {
        margin-top: 5rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.3rem;
      color: var(--color-grayish-blue-text);
      letter-spacing: 1.5px;
    `}
`;

export default Heading;
