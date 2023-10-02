import styled from "styled-components";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const StyledMain = styled.main`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("pattern-circles.svg") no-repeat center 5rem,
    url("bg-pattern.svg") no-repeat left -10rem,
    var(--color-very-pale-blue-main-background);
  background-size: auto, 100% 100px auto;

  @media (min-width: 750px) {
    background: url("pattern-circles.svg") no-repeat center 3rem,
      url("bg-pattern.svg") no-repeat;
    background-size: 8%, 100% 50%;
    height: 100vh;
  }
`;

function MainComp() {
  return (
    <StyledMain>
      <Header />
      <Card />
      <Footer />
    </StyledMain>
  );
}

export default MainComp;
