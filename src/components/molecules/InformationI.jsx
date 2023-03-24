import styled from "styled-components";
import Title from "../atoms/Title";
import Parrafo from "../atoms/Parrafo";
import Image from "../atoms/Image";

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    .information{
        width: 48%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        @media screen and (min-width: 320px) and (max-width: 520px){
            width: 97%;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 520px){
        flex-direction: column-reverse;
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