import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
`;

function Input({data, type, name}) {
    return (
        <Div>
            <label htmlFor={name}>{data}</label>
            <input id={name} type={type} name={name}/>
        </Div>
    );
}

export default Input;