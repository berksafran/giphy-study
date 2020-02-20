import styled from 'styled-components'

export const GifListWrapper = styled.div`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 1.5em;

  transition: all 450ms ease-in;

  /* .gallery-wrapper {
    padding: 1.5em;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
  } */

  .gallery {
    display: grid;
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: auto;
    transition: all 450ms ease-in;
  }

  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    .gallery {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    }
  }

  @media only screen and (max-width: 768px) {
    .gallery {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
  }

  @media only screen and (min-width: 1024px) {
    .gallery {
      grid-template-columns: repeat(5, minmax(100px, 1fr));
    }
  }
`;