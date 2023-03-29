import styled from 'styled-components';
import ParrafoW from '../atoms/ParrafoW';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2%;
    background-color: #8E98DE;
    border-radius: 10px;
`;

function InformacionPagoC({cantidad, fecha}) {
    return (
        <Div>
            <ParrafoW msn={cantidad}/>
            <ParrafoW msn={fecha}/>
        </Div>
    );
}

export default InformacionPagoC;