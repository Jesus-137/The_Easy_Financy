import styled from 'styled-components';
import Title from "../atoms/Title";
import Parrafo from "../atoms/Parrafo";
import Image from "../atoms/Image";

const Div = styled.div`
    margin-top: 16%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    .information{
        width: 48%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        @media screen and (min-width: 320px) and (max-width: 520px){
            width: 97%;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 520px){
        flex-direction: column;
    }
`;

function Information({title,msn,img}) {
    return (
        <Div>
            <Image img={img}></Image>
            <div className="information">
                <Title title={title}/>
                <Parrafo msn={msn}/>
            </div>
        </Div>
    );
}

export default Information;