import styled from 'styled-components';
import TitleW from '../atoms/TitleW';
import Logo from '../atoms/Logo';
import Imagen from '../../assets/img/TEF.png';
import menu from '../../assets/img/menu.svg'

const StyledHeader = styled.header`
    position: static;
    width: 100%;
    padding: 1% 4% 2% 1%;
    background: rgba(156, 169, 255, 0.87);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .LogoTEF{
        width: 26%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 700px) {
            width: 40%;
        }
    }
    .link{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 6%;
        @media screen and (max-width: 400px) {
            width: 20%;
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