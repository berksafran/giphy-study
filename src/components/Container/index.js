import styled from "styled-components";

const Container = styled.section`
  background-color: ${props => props.theme.containerBgColor};
  /* Main Container Styles (App.js) */
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    /* grid-gap: 20px; */
  }

  @media screen and (max-width: 520px) {
    .container {
      grid-template-rows: 70px 1fr auto;
    }
  }

  h1 {
   color: ${props => props.theme.containerFontColor};
  }
`;

export default Container;
