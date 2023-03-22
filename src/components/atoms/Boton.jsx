import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    margin-top:2%;
    border-radius: 20px;
    background-color: #9ca9ff;
    border: 0;
    height: 34px;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-variant: small-caps;
    text-align: center;
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
        font-size: 1.8rem;
    }
`;

function Boton({data, onClick, type}) {
    return (
        <Button type={type} onClick={onClick}>{data}</Button>
    );
}

export default Boton;