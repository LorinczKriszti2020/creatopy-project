import styled from "styled-components";



export const StyledNavbar = styled.nav`
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.header};
  padding-right: 40px;
  margin-bottom: 30px;

  img{
    height: 80%;
  }

  span{
    padding: 10px 20px;
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-right:15px;
    border:none;
    transition: all 0.15s;

    &:hover{
      scale: 1.02;
    }
  }
`