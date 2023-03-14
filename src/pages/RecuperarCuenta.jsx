import styled from 'styled-components';
import FormRecuperar from '../components/molecules/FormRecuperar';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;


function RecuperarCuenta() {
    return (
        <Div>
            <FormRecuperar/>
        </Div>
    );
}

export default RecuperarCuenta;