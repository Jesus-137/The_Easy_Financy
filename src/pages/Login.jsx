import styled from 'styled-components';
import FromLogin from "../components/molecules/FormLogin";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
`;


function Login() {
    return (
        <Div>
            <FromLogin/>
        </Div>
    );
}

export default Login;