import styled from "styled-components";
import FormRiesgo from "../molecules/FormRiesgo";
import Grahp from "../atoms/Grahp";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 96%;
    margin: 2%;
    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 98%;
        flex-direction: column;
    }
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

function ContentRiesgo() {
    return (
        <Div>
            <FormRiesgo/>
            <Grahp data={data} COLORS={COLORS}/>
        </Div>
    );
}

export default ContentRiesgo;