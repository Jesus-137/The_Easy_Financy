import styled from 'styled-components';

const StyledLink = styled.a`
    font-family: 'Raleway';
    font-style: normal;
    font-size: 141%;
    line-height: 136%;
    text-decoration-line: underline;
    font-variant: all-small-caps;
`;


function Links({direction, link}) {
    return (
        <StyledLink href={direction}>{link}</StyledLink>
    );
}

export default Links;