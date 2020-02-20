import styled from "styled-components";

// Main Content Wrapper
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  z-index: ${props => props.theme.containerZIndex}; 

  background-color: ${props => props.theme.containerBgColor};

  @media screen and (max-width: 520px) {
    margin: 0;
  }
`;

export default ContentWrapper;
