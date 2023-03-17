import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import FormProducto from "../components/molecules/FormProduction";
import ContentDash from '../components/organims/ContentDash';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2% 0;
`;

function Dashboard() {
    return (
        <>
            <HeaderS title={"Dashboard"}/>
            <Div>
                <FormProducto/>
                <ContentDash/>
            </Div>
            <Footer/>
        </>
    );
}

export default Dashboard;