import styled from "@emotion/styled";

const Container = styled.div`
  grid-column-start: span ${({ span }) => span};

  @media (max-width: 1024px) {
    grid-column-start: span 6;
  }
`;

export default Container;
