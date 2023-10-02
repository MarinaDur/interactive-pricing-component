import styled from "styled-components";
import { pageviewOptions } from "../data/pageViewsOptions";
import PropTypes from "prop-types";

const StyledSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const StyledSlider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    var(--color-soft-cyanf-full-slider-bar) 0%,
    var(--color-soft-cyanf-full-slider-bar) ${(props) => props.$fillPercentage}%,
    hsl(224, 65%, 95%) ${(props) => props.$fillPercentage}%,
    hsl(224, 65%, 95%) 100%
  );
  outline: none;
  opacity: 1;
  transition: opacity 0.2s;
  margin: 20px 0;

  &:hover {
    opacity: 0.7;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url("icon-slider.svg") no-repeat center,
      var(--color-strong-cyan-slider-backround);
    cursor: pointer;
    box-shadow: 0 20px 20px var(--color-soft-cyanf-full-slider-bar);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color-strong-cyan-slider-backround-hover);
    cursor: pointer;
  }
`;

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Slider({ value, onChange }) {
  const maxIndex = pageviewOptions.length - 1;
  const fillPercentage = (value / maxIndex) * 100;
  return (
    <StyledSliderContainer className="two">
      <StyledSlider
        type="range"
        min={0}
        max={maxIndex}
        value={value}
        onChange={onChange}
        $fillPercentage={fillPercentage}
      />
    </StyledSliderContainer>
  );
}

export default Slider;
