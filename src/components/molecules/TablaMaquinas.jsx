import styled from 'styled-components';
import SubTitle from '../atoms/Subtitle';
import Input from '../atoms/Input';

const StiledTabla = styled.table`
    width: 45%;
    padding: 1%;
    td{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-spacing: 0;
        vertical-align: inherit;
        padding: 0;
    }
    .th1{
        width: 70%;
        padding: 1%;
        border: 5px solid #000;
        text-align: center;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-weight: lighter;
        font-variant: small-caps;
        font-size: 1rem;
    }
    .th2{
        width: 70%;
        padding: 1%;
        border: 5px solid #000;
        background-color: #E4E7FC;
        text-align: center;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-weight: lighter;
        font-variant: small-caps;
        font-size: 1rem;
    }
`;

function TablaMaquina({columna}) {
    return (
        <StiledTabla>
            <Input type={"text"} data={"Buscar maquina"} name={"buscar"}/>
            <td>
                <th className='th1'>
                    <SubTitle subTitle={"Nombre de la maquina"}/>
                </th>
                <th className='th2'>
                    <SubTitle subTitle={"Fecha de mantenimiento"}/>
                </th>
            </td>
            {columna}
        </StiledTabla>
    );
}

export default TablaMaquina;