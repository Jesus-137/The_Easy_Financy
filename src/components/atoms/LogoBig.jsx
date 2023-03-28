import styled from 'styled-components';

const IMG = styled.img`
    width: 100%;
`;

function LogoBig({img}) {
    return (
        <IMG src={img}/>
    );
}

export default LogoBig;