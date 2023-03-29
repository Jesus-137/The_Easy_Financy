import styled from 'styled-components';
import TitleW from '../atoms/TitleW';
import Logo from '../atoms/Logo';
import Imagen from '../../assets/img/TEF.png';

const StyledHeader = styled.header`
    position:fixed;
    width: 100%;
    padding: 1% 4% 2% 1%;
    background-color: rgba(93, 106, 191, 0.87);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:white;
    z-index: 1;
    .LogoTEF{
        width: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media screen and (max-width: 700px) {
            width: 30%;
        }
    }
    .link{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 40%;
        @media screen and (max-width: 400px) {
            width: 29%;
        }
        @media screen and (min-width: 400px) and (max-width: 470px){
            width: 35%;
        }
        @media screen and (min-width: 470px) and (max-width: 500px){
            width: 40%;
        }
        @media screen and (min-width: 500px) and (max-width: 570px){
            width: 36%;
        }
        @media screen and (min-width: 570px) and (max-width: 640px){
            width: 33%;
        }
        @media screen and (min-width: 640px) and (max-width: 700px){
            width: 30%;
        }
    }
`;


function HeaderF({links}) {
    return (
        <StyledHeader>
            <div className='LogoTEF'>
                <Logo img={Imagen}/>
                <TitleW title={'The EasyFinancy'}/>
            </div>
            <TitleW title={"Home"}/>
            <div className='link'>
                {links}
            </div>
        </StyledHeader>
    );
}

export default HeaderF;