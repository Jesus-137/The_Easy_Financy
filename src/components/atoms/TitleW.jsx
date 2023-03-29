import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: 'Arimo', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 46px;
    font-variant: small;
    font-size: 62.5%;
    color: white;
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px) and (max-width: 600px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 700px){
        font-size: 1rem;
    }
    @media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 2.5rem;
    }
`;

function TitleW({title}) {
    return (
        <StyledH1>{title}</StyledH1>
    );
}

export default TitleW;