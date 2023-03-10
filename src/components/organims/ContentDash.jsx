import styled from "styled-components";
import Grahp from "../atoms/Grahp";
import StyledLinkW from "../atoms/LinkWhite";
import SubTitle from "../atoms/Subtitle";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .link{
        background-color: #9595d7;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        width: 100%;
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

function ContentDash() {
    return (
        <Div style={{width: "50%", height: 565}}>
            <div className='link'>
                <StyledLinkW to={"/grafica"}>por dia</StyledLinkW>
                <StyledLinkW to={"/grafica"}>por mes</StyledLinkW>
                <StyledLinkW to={"/grafica"}>por año</StyledLinkW>
            </div>
            <SubTitle subTitle={"Gastos"}/>
            <Grahp data={data} COLORS={COLORS}/>
            <SubTitle subTitle={"Ganancias"}/>
            <Grahp data={data} COLORS={COLORS}/>
        </Div>
    );
}

export default ContentDash;