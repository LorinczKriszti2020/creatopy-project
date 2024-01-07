import styled from "styled-components";

export const StyledGenerated = styled.div`
  border-top: 1px solid ${({theme}) => theme.colors.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 840px;
  
  img{
    max-height: 800px;
  }

  textarea{
    min-width: 250px;
    min-height: 150px;
    height: 150px;
    width: 250px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 3%;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 5px;
    margin-left: 5px;

    &:focus-within{
      outline: none;
    }
  }

  div{
    display: flex;
    flex-direction:column;
    align-items: center;
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
    border: none;
    margin-bottom: 10px;

    &:hover{
      scale: 1.02;
    }
  }

  .cont{
    display: flex;
    flex-direction: row;
    border: none;
    padding: 5px;
    background-color: ${({theme}) => theme.colors.header};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;
  }

  .cont button{
    margin: 0
  }

  .hidden{
    display: none
  }
`