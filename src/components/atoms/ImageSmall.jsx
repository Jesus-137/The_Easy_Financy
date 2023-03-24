import styled from 'styled-components';

const StyledIMG = styled.img`
    margin-top: 8%;
    width: 20%;
    @media screen and (min-width: 320px) and (max-width: 520px){
        width: 100%;
    }
`;


function Image({img}) {
    return (
        <StyledIMG src={img}/>
    );
}

export default Image;