import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: ${props =>
    props.bgColor ? props.bgColor : props.theme.buttonBgColor};
  color: ${props =>
    props.textColor ? props.textColor : props.theme.buttonFontColor};
  border: 1px solid ${props => (props.bgColor ? props.bgColor : "lightcoral")};
  border-radius: 7px;
  max-width: 12rem;
  padding: 15px 30px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  font-size: ${props => props.theme.buttonFontSize};
  transition: all 300ms ease-in;

  :hover {
    color: ${props => props.theme.buttonHoverFontColor};;
    background-color: ${props => props.theme.buttonHoverBgColor};
    cursor: pointer;
  }

  :disabled {
    background-color: lightgray;
    color: black;
    cursor: not-allowed;
    border-color: lightgray;
  }
`;

export { ButtonWrapper };
