import styled from "styled-components";
import FormVenta from "../molecules/FormVenta";
import Grahp from "../atoms/Grahp";

const Div = styled.div`
    width: 99%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 1%;
    .grahp{
        width: 50%;
    }
    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 90%;
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

function ContentVenta() {
    return (
        <Div>
            <FormVenta/>
            <div className="grahp">
                <Grahp data={data} COLORS={COLORS}/>
            </div>
        </Div>
    );
}

export default ContentVenta;