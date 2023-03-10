import styled from "styled-components";
import FromRegister from "../components/molecules/FormRegister";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

function Register() {
    return (
        <Div>
            <FromRegister/>
        </Div>
    );
}

export default Register;