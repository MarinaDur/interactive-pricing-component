import styled from "styled-components";
import Paragraph from "./Paragraph";
import PropTypes from "prop-types";

const StyledSmallContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 790px) {
    justify-content: left;
  }
`;

SmallContainer.propTypes = {
  children: PropTypes.string,
};

function SmallContainer({ children }) {
  return (
    <StyledSmallContainer>
      <img src="icon-check.svg" alt="check icon"></img>
      <Paragraph $type="s">{children}</Paragraph>
    </StyledSmallContainer>
  );
}

export default SmallContainer;
