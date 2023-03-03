import styled from "styled-components";
import Title from "../atoms/Title";
import Parrafo from "../atoms/Parrafo";
import Image from "../atoms/Image";

const Div = styled.div`
    margin-top: 8%;
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
    }
`;


function Information({title,msn,img, container}) {
    return (
        <Div>
            <div className="information">
                <Title title={title}/>
                <Parrafo msn={msn}/>
            </div>
            <Image img={img}></Image>
        </Div>
    );
}

export default Information;