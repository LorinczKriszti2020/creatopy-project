import { StyledNavbar } from "./styles/Navbar.styled"

const Navbar = ({theme}) => {
  return (
    <StyledNavbar theme={theme}>
      <img src="./images/logo.png"/>
      <div>
        <span>Home</span>
        <span>History</span>
      </div>
    </StyledNavbar>
  )
}

export default Navbar