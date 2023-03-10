import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import FormProducto from "../components/molecules/FormProduction";
import ContentDash from '../components/organims/ContentDash';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2%;
    .from{
        width: 50%;
        margin-top: 2%;
    }
`;

function Dashboard() {
    return (
        <>
            <HeaderS title={"Dashboard"}/>
            <Div>
                <div className='from'>
                    <FormProducto/>
                </div>
                <ContentDash/>
            </Div>
            <Footer/>
        </>
    );
}

export default Dashboard;