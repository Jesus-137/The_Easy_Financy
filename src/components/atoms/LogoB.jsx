import styled from 'styled-components';

const IMG = styled.img`
    /* width: 10%; */
    height: 89%;
`;

function LogoB({img}) {
    return (
        <IMG src={img}/>
    );
}

export default LogoB;