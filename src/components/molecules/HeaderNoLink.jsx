import styled from 'styled-components';
import Title from '../atoms/Title';
import Logo from '../atoms/Logo';
import Imagen from '../../assets/img/TEF.png';

const StyledHeader = styled.header`
    position:static;
    width: 100%;
    background-color: rgba(93, 106, 191, 0.87);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color:white;
`;


function Header({title}) {
    return (
        <StyledHeader>
            <Logo img={Imagen}/>
            <Title title={'The EasyFinancy'}/>
            <Title title={title}/>
        </StyledHeader>
    );
}

export default Header;