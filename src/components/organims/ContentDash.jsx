import styled from "styled-components";
import Grahp from "../atoms/Grahp";
import SimpleBarCharts from "../atoms/GrahpBara";
import StyledLinkW from "../atoms/LinkWhite";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    .link{
        background-color: #9595d7;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        width: 75%;
        border-radius: 31px;
    }
    .row{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        margin-bottom: 3%;
    }
    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 98%;
        margin: 1%;
    }
`;

const data = [
    { name: "Group A", value: 300 },
    { name: 'Group B', value: 4567 },
]

const data2 = [
    { name: "Group A", value: 300 },
    { name: 'Group B', value: 4567 },
    { name: 'Group c', value: 1567 },
    { name: 'Group d', value: 3567 },
]


function ContentDash() {
    return (
        <Div>
            <div className='link'>
                <StyledLinkW>por dia</StyledLinkW>
                <StyledLinkW>por mes</StyledLinkW>
                <StyledLinkW>por año</StyledLinkW>
            </div>
            <div className="row">
                <Grahp data={data} title={"Gastos"}/>
                <Grahp data={data} title={"Gastos"}/>
                <Grahp data={data} title={"Gastos"}/>
            </div>
            <div className="row">
                <SimpleBarCharts/>
                <SimpleBarCharts/>
                <SimpleBarCharts/>
            </div>
            <div className="row">
                <Grahp data={data2} title={"Gastos"}/>
                <Grahp data={data2} title={"Gastos"}/>
                <Grahp data={data2} title={"Gastos"}/>
            </div>
        </Div>
    );
}

export default ContentDash;