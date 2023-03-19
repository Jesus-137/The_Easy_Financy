import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinkW = styled(Link)`
    font-family: 'Raleway';
    font-style: normal;
    text-decoration-line: underline;
    font-variant: all-small-caps;
    color: white;
    font-size: 62.5%;
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px) and (max-width: 700px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 1500px){
        font-size: 1.5rem;
    }
    /* @media screen and (min-width: 800px) and (max-width: 1024px){
        font-size: 1rem;
    } */
`;

export default StyledLinkW;