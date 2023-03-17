import styled from 'styled-components';
import Input from '../atoms/Input';
import Grahp from '../atoms/Grahp';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
    width: 45%;
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

function ContentMeta() {
    return (
        <Div>
            <Input data={"Buscar meta"} type={"text"} name={"buscar"}/>
            <Grahp data={data} COLORS={COLORS}/>
        </Div>
    );
}

export default ContentMeta;