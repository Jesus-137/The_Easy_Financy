import styled from 'styled-components';
import SubTitle from '../atoms/Subtitle';
import StyledLink from '../atoms/Link';
import Boton from '../atoms/BotonF';

const StiledTabla = styled.table`
    width: 98%;
    margin: 1%;
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
        background-color: rgba(217, 217, 217, 1);
        text-align: center;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-weight: lighter;
        font-variant: small-caps;
        font-size: 1rem;
    }
`;

function TablaAlmacen({columna}) {
    return (
        <StiledTabla>
            <td>
                <th className='th1'>
                    <SubTitle subTitle={"Nombre del producto"}/>
                </th>
                <th className='th2'>
                    <SubTitle subTitle={"Cantidad por mes"}/>
                </th>
            </td>
            {columna}
            <StyledLink to={"/venta"}><Boton data={'Ventas'}/></StyledLink>
        </StiledTabla>
    );
}

export default TablaAlmacen;