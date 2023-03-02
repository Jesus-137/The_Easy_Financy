import styled from 'styled-components';
import Grahp from "../components/atoms/Grahp";
import Header from "../components/molecules/HeaderNoLink.jsx";
import FormProducto from "../components/molecules/FormProduction";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const data = [
    { name: "Group A", value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
]

const COLORS = ['#ce93d8', '#5c6bc0', '#b39ddb', '#4dd0e1', '#f48fb1', '#d500f9']

function Dashboard() {
    return (
        <>
            <Header title={"Dashboard"}/>
            <Div>
                <FormProducto/>
                <Grahp data={data} COLORS={COLORS}/>
            </Div>
        </>
    );
}

export default Dashboard;