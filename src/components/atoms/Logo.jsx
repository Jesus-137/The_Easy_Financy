import styled from 'styled-components';

const StyledIMG = styled.img`
    width: 45%;
    margin-right: 5%;
    height: 100%;
    @media screen and (min-width: 1300px){
        width: 10%;
    }
`;



function Logo({img}){
    return (
        <StyledIMG src={img}/>
    );
}

export default Logo;