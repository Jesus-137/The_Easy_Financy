import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-variant: all-small-caps;
    text-align: center;
    font-weight: 400;
    line-height: 36px;
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
        font-size: 1.94rem;
    }
`;

function SubTitle({subTitle}) {
    return (
        <StyledH2>{subTitle}</StyledH2>
    );
}

export default SubTitle;