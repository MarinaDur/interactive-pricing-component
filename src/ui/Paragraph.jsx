import styled, { css } from "styled-components";

const Paragraph = styled.p`
  ${(props) =>
    props.$type === "s" &&
    css`
      font-size: 1.2rem;
      color: var(--color-grayish-blue-text);
    `}

  ${(props) =>
    props.$type === "m" &&
    css`
      font-size: 1.3rem;
      color: var(--color-grayish-blue-text);
    `}

     ${(props) =>
    props.$type === "l" &&
    css`
      font-size: 3rem;
      color: var(--color-dark-desaturated-blue-text-CTA-background);
      font-weight: 800;
    `}
`;

export default Paragraph;
