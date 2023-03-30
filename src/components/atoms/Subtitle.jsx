import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-variant: all-small-caps;
    text-align: center;
    font-weight: 400;
    line-height: 23px;
    font-size: 62.5%;
    @media screen and (min-width: 320px) and (max-width: 700px) {
        font-size: 0.5625rem;
        font-weight: bold;
        margin: 0;
    }
    @media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0;
    }
`;

function SubTitle({subTitle}) {
    return (
        <StyledH2>{subTitle}</StyledH2>
    );
}

export default SubTitle;