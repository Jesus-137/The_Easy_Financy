import styled from 'styled-components';
import Grahp from "../components/atoms/Grahp";
import Header from "../components/molecules/HeaderNoLink.jsx";
import FormProducto from "../components/molecules/FormProduction";
import Links from '../components/atoms/Links';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2%;
    .link{
        background-color: #9595d7;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
    }
    .from{
        width: 60%;
        margin-top: 2%;
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

const COLORS = ['#ce93d8', '#5c6bc0', '#b45151', '#153438', '#a4848f', '#00f9890']

function Dashboard() {
    return (
        <>
            <Header title={"Dashboard"}/>
            <Div>
                <div className='from'>
                    <FormProducto/>
                </div>
                <div style={{width: "40%", height: 460}}>
                    <div className='link'>
                        <Links link={"por dia"} direction={"/grafica"}/>
                        <Links link={"por mes"} direction={"/grafica"}/>
                        <Links link={"por año"} direction={"/grafica"}/>
                    </div>
                    <Grahp data={data} COLORS={COLORS}/>
                    <Grahp data={data} COLORS={COLORS}/>
                </div>
            </Div>
        </>
    );
}

export default Dashboard;