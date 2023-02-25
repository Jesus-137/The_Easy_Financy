import styled from 'styled-components';

const StyledIMG = styled.img`
    width: 10%;
`;



function Logo({img}){
    return (
        <StyledIMG src={img}/>
    );
}

export default Logo;