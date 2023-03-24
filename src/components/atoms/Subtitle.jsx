import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-variant: all-small-caps;
    font-style: normal;
    text-align: center;
    font-size: 62.5%;
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 700px){
        font-size: 1rem;
    }
    @media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 2rem;
    }
`;

function SubTitle({subTitle}) {
    return (
        <StyledH2>{subTitle}</StyledH2>
    );
}

export default SubTitle;