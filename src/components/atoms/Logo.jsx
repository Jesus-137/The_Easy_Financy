import styled from 'styled-components';

const StyledIMG = styled.img`
    width: 10%;
    margin-right: 5%;
    height: 100%;
    margin-right: 20%;
`;



function Logo({img}){
    return (
        <StyledIMG src={img}/>
    );
}

export default Logo;