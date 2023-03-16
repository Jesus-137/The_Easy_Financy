import styled from 'styled-components';
import FormCorreo from '../components/organims/FormCorreo';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

function CorreoMandado() {
    return (
        <Div>
            <FormCorreo/>
        </Div>
    );
}

export default CorreoMandado;