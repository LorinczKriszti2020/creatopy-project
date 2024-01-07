import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  textarea{
    min-width: 250px;
    min-height: 150px;
    height: 250px;
    width: 440px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 3%;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;

    &:focus-within{
      outline: none;
    }
  }

  h2{
    margin-bottom: 15px;
  }

  p{
    margin-bottom: 10px;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 50px;
    margin-bottom: 20px;
  }

  div div{
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 300px;
    padding: 5px;
  }

  .selected{
    border: 2px solid black;
  }

  img{
    height: 90%;
    transition: all 0.15s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);

    &:hover{
      scale: 1.03;
    }
  }

  .instagram{
    aspect-ratio: 1/1;
    height: 70%
  }

  .twitter{
    aspect-ratio: 1/1;
  }

  .story{
    aspect-ratio: 9/16;
  }

  button{
    padding: 10px 20px;
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-right:15px;
    transition: all 0.15s;
    border:none;

    &:hover{
      scale: 1.02;
    }
  }

`