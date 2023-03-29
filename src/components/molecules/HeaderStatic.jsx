import styled from 'styled-components';
import TitleW from '../atoms/TitleW';
import Logo from '../atoms/Logo';
import Imagen from '../../assets/img/TEF.png';
import menu from '../../assets/img/menu.svg'

const StyledHeader = styled.header`
    position: static;
    width: 100%;
    padding: 1% 4% 2% 1%;
    background-color: rgba(93, 106, 191, 0.87);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .LogoTEF{
        width: 26%;
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
        width: 23%;
        @media screen and (max-width: 400px) {
            width: 30%;
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


function HeaderS({title,links}) {
    return (
        <StyledHeader>
            <div className='LogoTEF'>
                <Logo img={Imagen}/>
                <TitleW title={'The EasyFinancy'}/>
            </div>
            <TitleW title={title}/>
            <div className='link'>
                <div class="btn-group">
                    <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={menu}/>
                    </button>
                    <ul class="dropdown-menu">
                        {links}
                    </ul>
                </div>
            </div>
        </StyledHeader>
    );
}

export default HeaderS;