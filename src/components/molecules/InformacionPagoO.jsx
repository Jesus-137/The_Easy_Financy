import styled from 'styled-components';
import Parrafo from "../atoms/Parrafo";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2%;
    background-color: #595F81;
    color: white;
`;

function InformacionPagoO({cantidad, fecha}) {
    return (
        <Div>
            <Parrafo msn={cantidad}/>
            <Parrafo msn={fecha}/>
        </Div>
    );
}

export default InformacionPagoO;