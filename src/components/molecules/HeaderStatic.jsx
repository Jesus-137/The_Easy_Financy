import styled from 'styled-components';
import Title from '../atoms/Title';
import Logo from '../atoms/Logo';
import Imagen from '../../assets/img/TEF.png';

const StyledHeader = styled.header`
    position: static;
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
        width: 23%;
    }
`;


function HeaderS({title,links}) {
    return (
        <StyledHeader>
            <div className='LogoTEF'>
                <Logo img={Imagen}/>
                <Title title={'The EasyFinancy'}/>
            </div>
            <Title title={title}/>
            <div className='link'>
                {links}
            </div>
        </StyledHeader>
    );
}

export default HeaderS;