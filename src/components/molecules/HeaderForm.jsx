import styled from "styled-components";
import StyledIMG from "../atoms/LogoFrom";
import Title from "../atoms/Title";
import logo from "../../assets/img/TEF.png";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 7%;
    width: 100%;
    border-bottom: 5px dashed;
    align-items: center;
`;

function HeaderForm({name}) {
    return (
        <Div>
            <StyledIMG src={logo}/>
            <Title title={name}/>
        </Div>
    );
}

export default HeaderForm;