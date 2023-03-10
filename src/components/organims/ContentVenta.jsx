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

const COLORS = ['#00FFB2', '#F54B4B', '#010846', '#FBA600', '#E56E00', '#4C0297']

function ContentVenta() {
    return (
        <Div>
            <FormVenta/>
            <Grahp data={data} COLORS={COLORS}/>
        </Div>
    );
}

export default ContentVenta;