import styled from 'styled-components';
import SubTitle from '../atoms/Subtitle';
import InputBuscar from '../atoms/InputBuscar';

const Div = styled.div`
    width: 78%;
    margin: 1%;
    align-items: center;
    margin-left: 10%;
    border-radius: 31px;
    padding: 3%;
    background-color: #9CA9FF;
    table{
        width: 100%;
    }
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
        border-width: 1px 0px 1px 1px;
        border-style: solid;
        text-align: center;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-weight: lighter;
        font-variant: small-caps;
        font-size: 1rem;
        background-color: white;
    }
    .th2{
        width: 70%;
        padding: 1%;
        border-width: 1px 0px 1px 1px;
        border-style: solid;
        background-color: #EEEAFF;
        text-align: center;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-weight: lighter;
        font-variant: small-caps;
        font-size: 1rem;
    }
`;

function Tabla({ columna, placeholder }) {
    return (
        <div>
            <InputBuscar type={'text'} placeholder={placeholder}/>
            <Div>
                <table>
                    <td>
                        <th className='th1'>
                            <SubTitle subTitle={"Nombre del producto"}/>
                        </th>
                        <th className='th2'>
                            <SubTitle subTitle={"Cantidad por mes"}/>
                        </th>
                    </td>
                    {columna}
                </table>
            </Div>
        </div>
    );
}

export default Tabla;