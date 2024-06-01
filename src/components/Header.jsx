


import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {


    const logo = 'C:/Users/user/OneDrive/Documents/react-project/1298732_codepen_icon.png';


    return (
       <Container position="static ">
            <Toolbar>
               <img src={logo} alt= "logo"  style={{width : 40 }}/>
            </Toolbar>
       </Container>
    )
}

export default Header;