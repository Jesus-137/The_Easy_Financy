import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    margin-top:2%;
    border-radius: 20px;
    background-color: #c182e9;
    border: 0;
    height: 30px;
`;

function Boton({data, onClick, type}) {
    return (
        <Button type={type} onClick={onClick}>{data}</Button>
    );
}

export default Boton;