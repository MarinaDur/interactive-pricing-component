import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;

  ${(props) =>
    props.$size === "small" &&
    css`
      background: var(--color-light-grayish-red-discount-bg);
      color: var(--color-light-red-discount-text);
      padding: 2px 8px;
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      background: var(--color-dark-desaturated-blue-text-CTA-background);
      color: var(--color-grayish-blue-text);
      padding: 5px;
      height: 40px;
      width: 170px;
      border-radius: 30px;

      &:hover {
        color: var(--color-light-grayish-blue-toggle-background);
      }
    `}
`;

Button.defaultProps = {
  $size: "large",
};

export default Button;
