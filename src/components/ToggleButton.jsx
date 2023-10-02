import styled from "styled-components";

const StyledToggleCon = styled.div`
  display: flex;
  justify-content: ${(props) => (props.value ? "flex-end" : "flex-start")};
  align-items: center;
  background: ${(props) =>
    props.value
      ? "var(--color-strong-cyan-slider-backround)"
      : "var(--color-light-grayish-blue-toggle-background)"};
  width: 40px;
  height: 22px;
  border-radius: 12px;
  padding: 5px 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.value
        ? "var(--color-light-grayish-blue-toggle-background)"
        : "var(--color-strong-cyan-slider-backround)"};
  }
`;

const StyledToggleButton = styled.div`
  width: 13px;
  height: 13px;
  background: var(--color-very-pale-blue-main-background);
  border-radius: 50%;
`;

function ToggleButton({ onClick, value }) {
  return (
    <StyledToggleCon onClick={onClick} value={value}>
      <StyledToggleButton />
    </StyledToggleCon>
  );
}

export default ToggleButton;
