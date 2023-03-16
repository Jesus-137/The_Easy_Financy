import styled from 'styled-components';
import FromLogin from '../components/organims/FormLogin';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;


function Login() {
    return (
        <Div>
            <FromLogin/>
        </Div>
    );
}

export default Login;