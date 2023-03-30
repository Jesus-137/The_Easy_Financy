import styled from 'styled-components';
import InputBuscar from '../atoms/InputBuscar';
import SimpleBarCharts from '../atoms/GrahpBara';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    margin-left: 15%;
    border-radius: 31px;
    background-color: #9CA9FF;
    padding-right: 2%;
    width: 65%;
    .lista{
        margin: 3%;
        width: 35%;
        background-color: white;
    }
    .grahp{
        margin: 3%;
        height: 200px;
        width: 45%;
        background-color: white;
    }
    @media screen and (min-width: 320px) and (max-width: 700px){
        width: 80%;
        padding: 10% 0%;
        justify-content: center;
    }
`;

function ContentMeta() {
    return (
        <>
            <InputBuscar placeholder={"Buscar meta"}/>
            <Div>
                <div className='lista'>
                    <ul>
                        <li>hola</li>
                    </ul>
                </div>
                <div className='grahp'>
                    <SimpleBarCharts width={"100%"} aspect={0}/>
                </div>
            </Div>
        </>
    );
}

export default ContentMeta;