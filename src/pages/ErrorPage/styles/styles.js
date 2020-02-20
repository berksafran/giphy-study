import styled from 'styled-components';

export const ErrorPageWrapper = styled.div`

flex: display;
flex-direction: row;
justify-content: center; 
align-items: center;
padding: 10% 0px;

a {
    text-decoration: none;
    color: ${props => props.theme.errorPageFontColor};
}

`