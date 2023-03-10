import styled from 'styled-components';
import Title from '../atoms/Title';
import Logo from '../atoms/Logo';
import StyledLink from '../atoms/LinkHeader';
import Imagen from '../../assets/img/TEF.png';

const StyledHeader = styled.header`
    position:fixed;
    width: 95%;
    padding: 1% 4% 2% 1%;
    background-color: rgba(93, 106, 191, 0.87);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:white;
    .LogoTEF{
        width: 26%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .link{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 21%;
    }
`;


function Header() {
    return (
        <StyledHeader>
            <div className='LogoTEF'>
                <Logo img={Imagen}/>
                <Title title={'The EasyFinancy'}/>
            </div>
            <Title title={"Home"}/>
            <div className='link'>
                <StyledLink to={"/iniciar"}>Iniciar sesión</StyledLink>
                <StyledLink to={"/crear"}>Registrar</StyledLink>
            </div>
        </StyledHeader>
    );
}

export default Header;