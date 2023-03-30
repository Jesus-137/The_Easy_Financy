import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 300;
    line-height: 33px;
    font-variant: small;
    color: #000;
    font-size: 62.5%;
    @media screen and (min-width: 320px) and (max-width: 400px){
        font-size: 0.75rem;
        line-height: 16px;
        text-align: justify;
    }
    @media screen and (min-width: 400px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 700px){
        font-size: 1rem;
    }
    @media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 1.5rem;
    }
`;

function Parrafo({msn}) {
    return (
        <StyledH3>{msn}</StyledH3>
    );
}

export default Parrafo;