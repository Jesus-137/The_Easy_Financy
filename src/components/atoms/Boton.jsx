import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    margin-top:2%;
    border-radius: 20px;
    background-color: #c182e9;
    border: 0px;
`;

function Boton({data, onClick}) {
    return (
        <Button onClick={onClick}>{data}</Button>
    );
}

export default Boton;