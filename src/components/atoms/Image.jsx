import styled from 'styled-components';

const StyledIMG = styled.img`
    margin-top: 8%;
    width: 50%;
    height: 250%;
    @media screen and (min-width: 320px) and (max-width: 768px){
        width: 100%;
    }
`;


function Image({img}) {
    return (
        <StyledIMG src={img}/>
    );
}

export default Image;