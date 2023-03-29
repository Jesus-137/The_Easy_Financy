import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Boton from './Boton';

const Link2 = styled(Link)`
    text-decoration: none;
    width: 40%;
    margin-top: 5%;
`;

function Botonlink({data, link, onclick}) {
    return (
        <Link2 to={link}><Boton data={data} onClick={onclick}/></Link2>
    );
}

export default Botonlink;