import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Parrafo from './Parrafo';

const Div = styled.div`
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
    font-weight: 300;
    line-height: 33px;
    margin-top: 1%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #031CFF;
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px) and (max-width: 700px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 1500px){
        font-size: 1.5rem;
    }
`;

function LinkB({data, link, to}) {
    return (
        <Div>
            <Parrafo msn={data}/>
            <Link to={to}>{link}</Link>
        </Div>
    );
}

export default LinkB;