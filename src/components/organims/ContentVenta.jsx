import styled from "styled-components";
import FormVenta from "../molecules/FormVenta";
import Grahp from "../atoms/Grahp";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
`;

const data = [
    { name: "Group A", value: 300 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
]

const COLORS = ['#ce93d8', '#5c6bc0', '#b45151', '#153438', '#a4848f', '#00f9890']

function ContentVenta() {
    return (
        <Div>
            <FormVenta/>
            <Grahp data={data} COLORS={COLORS}/>
        </Div>
    );
}

export default ContentVenta;