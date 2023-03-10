import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StiledLink = styled(Link)`
    width: 20%;
    margin-right: 5%;
    height: 50%;
`;

function LogoRed({link, img, description}) {
    return (
        <StiledLink to={link}>
            <img src={img} alt={description} />
        </StiledLink>
    );
}

export default LogoRed;