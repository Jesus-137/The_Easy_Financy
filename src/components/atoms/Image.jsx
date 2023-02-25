import styled from 'styled-components';

const StyledIMG = styled.img`
    margin-top: 16%;
    width: 50%;
    height: 250%;
`;


function Image({img}) {
    return (
        <StyledIMG src={img}/>
    );
}

export default Image;