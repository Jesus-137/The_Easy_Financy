import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: 'Arimo', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 46px;
    font-variant: small;
    font-size: 62.5%;
    text-align: center;
    @media screen and (min-width: 320px) and (max-width: 700px){
        font-size: 0.5625rem;
        font-weight: 800;
        margin: 0;
    }
    @media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0;
    }
`;

function TitleF({title}) {
    return (
        <StyledH1>{title}</StyledH1>
    );
}

export default TitleF;