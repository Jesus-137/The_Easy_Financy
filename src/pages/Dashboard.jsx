import styled from 'styled-components';
import Grahp from "../components/atoms/Grahp";
import HeaderS from '../components/molecules/HeaderStatic';
import FormProducto from "../components/molecules/FormProduction";
import StyledLink from '../components/atoms/LinkWhite';
import Footer from '../components/molecules/Footer';

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
        width: 100%;
    }
    .grahp{
        display: flex;
        flex-direction: column;
        align-items: center;
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
            <HeaderS title={"Dashboard"}/>
            <Div>
                <div className='from'>
                    <FormProducto/>
                </div>
                <div className='grahp' style={{width: "40%", height: 460}}>
                    <div className='link'>
                        <StyledLink to={"/grafica"}>por dia</StyledLink>
                        <StyledLink to={"/grafica"}>por mes</StyledLink>
                        <StyledLink to={"/grafica"}>por año</StyledLink>
                    </div>
                    <Grahp data={data} COLORS={COLORS}/>
                    <Grahp data={data} COLORS={COLORS}/>
                </div>
            </Div>
            <Footer/>
        </>
    );
}

export default Dashboard;