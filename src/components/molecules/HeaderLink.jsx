import styled from 'styled-components';
import Title from '../atoms/Title';
import Logo from '../atoms/Logo';
import Links from '../atoms/Links';
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
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .TEF{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`;


function Header() {
    return (
        <StyledHeader>
            <div className='LogoTEF'>
                <Logo img={Imagen}/>
                <div className='TEF'>
                    <Title title={'The'}/>
                    <Title title={'EasyFinancy'}/>
                </div>
            </div>
            <Title title={"Home"}/>
            <Links link={"Iniciar sesión"} direction={"/iniciar"} />
            <Links link={"Registrar"} direction={"/crear"}/>
        </StyledHeader>
    );
}

export default Header;