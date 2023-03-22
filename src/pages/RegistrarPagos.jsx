import styled from 'styled-components';
import FormRegistrarPago from '../components/organims/FormRegisterPago';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

function RegistrarPago() {
    return (
        <Div>
            <FormRegistrarPago/>
        </Div>
    );
}

export default RegistrarPago;