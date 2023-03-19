import styled from 'styled-components';

const StiledLink = styled.a`
    width: 20%;
    margin-right: 5%;
    height: 50%;
    @media screen and (min-width: 320px) {
        width: 100%;
    }
`;

function LogoRed({link, text, img, description}) {
    return (
        <StiledLink href={link}>
            <p onClick={()=> {navigator.clipboard.writeText(text)}}><img src={img} alt={description}/></p>
        </StiledLink>
    );
}

export default LogoRed;