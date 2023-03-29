import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-radius: 20px;
    background-color: #9ca9ff;
    border: 0;
    height: 100%;
    font-family: 'Ubuntu', Arial, Helvetica, sans-serif ;
    font-style: normal;;
    font-weight: 400;
    font-variant: small-caps;
    text-align: center;
    align-self: center;
    align-items: center;
    color: white;
    font-size: 62.5%;
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px) and (max-width: 600px) {
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 700px){
        font-size: 1rem;
    }@media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 1.5rem;
    }
`;

function Boton({data, onClick, type}) {
    return (
        <Button type={type} onClick={onClick}>{data}</Button>
    );
}

export default Boton;