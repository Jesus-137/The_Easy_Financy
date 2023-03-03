import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-style: medium;
    font-size: 1.8rem;
    font-variant: small-caps;
    text-align: center;
    width: 100%;
`;

function Title({title}) {
    return (
        <StyledH1>{title}</StyledH1>
    );
}

export default Title;