import styled from 'styled-components';

const StyledIMG = styled.img`
    width: 10%;
    margin-right: 20%;
`;


function Image({img}) {
    return (
        <StyledIMG src={img}/>
    );
}

export default Image;