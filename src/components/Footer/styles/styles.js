import styled from "styled-components";

// Footer Styled
export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.footerBgColor};
  color: ${props => props.theme.footerTextColor};

  justify-content: center;
  align-items: center;

  position: relative;

  svg{
    fill: red;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -90px;
    color: ${props => props.theme.footerTextColor};
    font-size: ${props => props.theme.footerFontSize};
  }
`;
