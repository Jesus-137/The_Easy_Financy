import styled from 'styled-components';
import LogoB from './LogoB';
import login from "../../assets/img/Login.png"

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3% 0 39%;
    margin-top:6%;
    width: 100%;
    border-radius: 20px;
    background-color: #9ca9ff;
    border: 0;
    height: 70px;
    font-family: 'Ubuntu', Arial, Helvetica, sans-serif ;
    font-style: normal;;
    font-weight: 400;
    font-variant: small-caps;
    text-align: center;
    color: white;
    font-size: 62.5%;
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px) and (max-width: 600px) {
        font-size: 0.9rem;
        height: 40px;
    }
    @media screen and (min-width: 600px) and (max-width: 700px){
        font-size: 1rem;
        height: 40px;
    }@media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 1.94rem;
        height: 40px;
    }
`;

function Boton({data, onClick, type}) {
    return (
        <Button type={type} onClick={onClick}>{data} <LogoB img={login}/></Button>
    );
}

export default Boton;