import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

////Primary

--color-soft-cyanf-full-slider-bar: hsl(174, 77%, 80%);
--color-strong-cyan-slider-backround: hsl(174, 86%, 45%);
--color-strong-cyan-slider-backround-hover: hsl(174, 86%, 40%);
--color-light-grayish-red-discount-bg: hsl(14, 92%, 95%);
--color-light-red-discount-text: hsl(15, 100%, 70%);
--color-pale-blue-CTA-text: hsl(226, 100%, 87%);

////Neutral

--color-white-pricing-component-background: hsl (0, 0%, 100%);
--color-very-pale-blue-main-background: hsl(230, 100%, 99%);
--color-light-grayish-blue-empty-slider-bar: hsl(224, 65%, 95%);
--color-light-grayish-blue-toggle-background: hsl(223, 50%, 87%);
--color-grayish-blue-text: hsl(225, 20%, 60%);
--color-dark-desaturated-blue-text-CTA-background: hsl(227, 35%, 25%);


--color-neutral-white: hsl(0, 0%, 100%);
--color-neutral-off-white: hsl(0, 0%, 94%);
--color-neutral-light-gray: hsl(0, 0%, 86%);
--color-neutral-smokey-gray: hsl(0, 1%, 44%);
--color-neutral-off-black: hsl(0, 0%, 8%);


 
}
/* 
#root{
  width: 100vw;
  height: 100vh;
} */

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
   height: 100vh;
}

body {
font-family: 'Manrope', sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 16px;
  height: 100vh;
  /* display  :flex ;
justify-items: center; */
/* 
 display: grid;
  place-content: center;
  
  min-height: 100vh; */

  
}

input{
    font-size: 3.2rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}




p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  //filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

@media (min-width: 590px) {

  
    .one,.three{
        grid-column: 2 2;
        display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center;
    }
    
    .two{
        grid-column: 1/3;
        grid-row: 2;
        margin-bottom: 1.5rem;
    }

    .four{
        grid-column: 1/3;
        grid-row: 3; 
        gap: 2rem;

    }
}

/*
FOR DARK MODE


*/
`;
export default GlobalStyles;
