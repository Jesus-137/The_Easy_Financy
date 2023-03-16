import styled from "styled-components";
import Logo from "../atoms/Logo";
import Title from "../atoms/Title";
import logo from "../../assets/img/TEF.png";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    text-align: center;
    margin-bottom: 7%;
    padding-right: 30%;
    width: 69.9%;
    border-bottom: 5px dashed;
`;

function HeaderForm({name}) {
    return (
        <Div>
            <Logo img={logo}/>
            <Title title={name}/>
        </Div>
    );
}

export default HeaderForm;