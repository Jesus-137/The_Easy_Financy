import styled from 'styled-components';
import FormMaquina from '../molecules/FormMaquina';
import TablaMaquina from '../molecules/TablaMaquinas';

const Div = styled.div`
    padding: 0 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

function ContentMaquina() {
    return (
        <Div>
            <FormMaquina/>
            <TablaMaquina columna={(<><td><th className="th1"><p>Horno</p></th><th className="th2"><p>27/01/2023</p></th></td><td><th className="th1"><p>Estufa</p></th><th className="th2"><p>28/02/2023</p></th></td><td><th className="th1"><p>Microondas</p></th><th className="th2"><p>15/04/2023</p></th></td><td><th className="th1"><p>Refigerador</p></th><th className="th2"><p>15/07/2023</p></th></td></>)}/>
        </Div>
    );
}

export default ContentMaquina;