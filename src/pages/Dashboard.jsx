import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import ContentDash from '../components/organims/ContentDash';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2% 0;
    @media screen and (min-width: 320px) and (max-width: 700px){
        flex-direction: column;
    }
`;

function Dashboard() {
    return (
        <>
            <HeaderS title={"Dashboard"}/>
            <Div>
                <ContentDash/>
            </Div>
            <Footer/>
        </>
    );
}

export default Dashboard;