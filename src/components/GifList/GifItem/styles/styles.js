import styled from "styled-components";

export const GifItemWrapper = styled.div`
  position: relative;

  img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${props => props.imgWidth}px;
    height: ${props => props.imgHeight}px;
    text-align: center;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(229, 234, 238, 0) 50%,
      rgba(0, 0, 0, 0.6502976190476191) 100%
    );
  }



  .middle:hover {
    opacity: 1;
    cursor: pointer;
  }

  .text {
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 10px;
  }

  @media screen and (max-width: 764px) {
    .middle, .text {
      display: none
    }
  }
`;
