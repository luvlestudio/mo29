import styled from "styled-components";

const Div = styled.div`
  opacity: 0;
  transform: translateY(${(props) => props.$translateY});
  transition: opacity ${(props) => props.$transition.opacity}s ease,
    transform ${(props) => props.$transition.transform}s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Wrapper({ className, $translateY, $transition, children }) {
  return (
    <Div
      className={className}
      $translateY={$translateY}
      $transition={$transition}
    >
      {children}
    </Div>
  );
}

export default Wrapper;
