import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: relative;
  display: block;
  padding: ${props => props.padding}px;

  &:before {
    position: relative;
    display: block;
    content: "";
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: ${props => props.weight}px solid rgba(0, 0, 0, 0.05);
    border-right-color: ${props => props.theme.loadingIconColor};
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
