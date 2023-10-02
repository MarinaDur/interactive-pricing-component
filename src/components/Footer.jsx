import styled from "styled-components";
import SmallContainer from "../ui/SmallContainer";
import Button from "../ui/Button";
import Container from "../ui/Container";

const StyledFooter = styled.footer`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 90%;
  max-width: 550px;
  background: white;
  box-shadow: 0 10px 20px var(--color-light-grayish-blue-empty-slider-bar);
  margin-bottom: 10rem;

  @media (min-width: 790px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <SmallContainer>Unlimited websites</SmallContainer>
        <SmallContainer>100% data ownership</SmallContainer>
        <SmallContainer>Email reports</SmallContainer>
      </Container>
      <Button $size="large">Start my trial</Button>
    </StyledFooter>
  );
}

export default Footer;
