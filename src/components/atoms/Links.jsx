import styled from 'styled-components';

const StyledLink = styled.a`
    font-family: 'Raleway';
    font-style: normal;
    font-size: 1.5rem;
    text-decoration-line: underline;
    font-variant: all-small-caps;
    color: ;
`;


function Links({direction, link}) {
    return (
        <StyledLink href={direction}>{link}</StyledLink>
    );
}

export default Links;