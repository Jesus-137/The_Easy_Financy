import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinkW = styled(Link)`
    font-family: 'Arimo', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    font-variant: small-caps;
    text-decoration: none;
    color: white;
    font-size: 62.5%;
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px) and (max-width: 700px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 1500px){
        font-size: 2.1875rem;
    }
    /* @media screen and (min-width: 800px) and (max-width: 1024px){
        font-size: 1rem;
    } */
`;

export default StyledLinkW;