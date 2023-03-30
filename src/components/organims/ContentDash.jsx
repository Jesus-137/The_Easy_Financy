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
    .secundario{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        width: 67%;
        /* height: 100px; */
        @media screen and (min-width: 320px) and (max-width: 700px) {
            display: none;
        }
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

let data = [
    { name: "Group A", value: 300 },
    { name: 'Group B', value: 4567 },
    { name: 'Group c', value: 1567 },
    { name: 'Group d', value: 3567 },
]

let data2 = [
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
                <div className="secundario">
                    <Grahp data={data} title={"Gastos"}/>
                    <Grahp data={data} title={"Gastos"}/>
                </div>
            </div>
            <div className="row">
                <SimpleBarCharts width={'33%'} aspect={2.3}/>
                <div className="secundario">
                    <SimpleBarCharts width={'33%'} aspect={1.5}/>
                    <SimpleBarCharts width={'33%'} aspect={1.5}/>
                </div>
            </div>
            <div className="row">
                <Grahp data={data2} title={"Gastos"}/>
                <div className="secundario">
                    <Grahp data={data2} title={"Gastos"}/>
                    <Grahp data={data2} title={"Gastos"}/>
                </div>
            </div>
        </Div>
    );
}

export default ContentDash;