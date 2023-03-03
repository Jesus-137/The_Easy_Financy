import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-variant: small-caps;
    text-align: justify;
    font-size: 1rem;
`;

function Parrafo({msn}) {
    return (
        <StyledH3>{msn}</StyledH3>
    );
}

export default Parrafo;