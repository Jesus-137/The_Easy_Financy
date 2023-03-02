import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-variant: all-small-caps;
    font-style: normal;
    text-align: center;
    font-size: 140%;
    line-height: 136%;
`;

function SubTitle({subTitle}) {
    return (
        <StyledH2>{subTitle}</StyledH2>
    );
}

export default SubTitle;