import styled from 'styled-components';

const IMG = styled.img`
    width: 100%;
    @media screen and (max-width: 700px){
        width: 30%;
    }
`;

function LogoBig({img}) {
    return (
        <IMG src={img}/>
    );
}

export default LogoBig;