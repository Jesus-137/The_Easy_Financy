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


function Dashboard() {
    return (
        <>
            <Header title={"Dashboard"}/>
            <Div>
                <FormProducto/>
                <Grahp/>
            </Div>
        </>
    );
}

export default Dashboard;