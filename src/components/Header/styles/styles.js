import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px 50px;
  background-color: ${props => props.theme.headerBgColor};
  transition: all 450ms ease-in;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  z-index: ${props => props.theme.headerZIndex};

  div {
    padding: 10px;
  }

  p {
    font-size: 20px;
    line-height: 1;
    font-weight: 900;
    color: ${props => props.theme.headerFontColor};
    text-decoration: none;

    :hover {
      text-decoration: none;
      color: ${props => props.theme.headerHoverFontColor};
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 764px) {
    position: sticky;
    top: 0;
    display: flex;
    padding: 10px;
    height: 70px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);

    button {
      display: none;
    }
  }

  input[type="text"] {
    width: 30vw;
    border-color: #cccccc;
    font-size: 1rem;
    padding: 15px;
    border-width: 1px;
    border-style: solid;
    box-shadow: 0px 0px 6px 0px rgba(42, 42, 42, 0.16);
    border-radius: 10px;
  }

  input:focus {
    outline: none;
  }
`;
