import styled from "styled-components";
import Heading from "../ui/Heading";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import { pageviewOptions } from "../data/pageViewsOptions";
import Paragraph from "../ui/Paragraph";
import Container from "../ui/Container";
import ToggleButton from "./ToggleButton";
import Button from "../ui/Button";

const StyledCard = styled.div`
  margin: 6rem 6rem 0.3rem;
  width: 90%;
  max-width: 550px;
  background: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 10px 20px var(--color-light-grayish-blue-empty-slider-bar);

  @media (min-width: 590px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Define 4 columns */
    grid-template-rows: auto; /* Auto rows for flexible height */
    padding: 3rem 4rem;
  }
`;

function Card() {
  const [value, setValue] = useState(2);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleToggle() {
    setIsYearlyBilling((prev) => !prev);
  }

  function discount(price) {
    const priceWithDiscount = price - price * 0.25;
    return priceWithDiscount;
  }

  const selectedOption = pageviewOptions[value];

  return (
    <StyledCard className="card-con">
      <Heading as="h2" className="one">
        {selectedOption.pageviews} PAGEVIEWS
      </Heading>
      <Slider value={value} onChange={handleChange} className="two" />
      <Container $flex="row" $type="main" $display="default" className="three">
        <Paragraph $type="l">{`$${
          isYearlyBilling
            ? discount(selectedOption.price).toFixed(2)
            : selectedOption.price.toFixed(2)
        }`}</Paragraph>
        <Paragraph $type="m">/ month</Paragraph>
      </Container>
      <Container $flex="row" $type="main" $display="right" className="four">
        <Paragraph $type="s">Monthy billing</Paragraph>
        <ToggleButton onClick={handleToggle} value={isYearlyBilling} />
        <Paragraph $type="s">Yearly billing</Paragraph>
        <Button $size="small">
          {screenWidth > 590 ? "-25% discount" : "-25%"}
        </Button>
      </Container>
    </StyledCard>
  );
}

export default Card;
