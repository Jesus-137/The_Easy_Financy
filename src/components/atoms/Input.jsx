import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: start;
    width: 100%;
    height: 70px;
    font-size: 1.5rem;
    .inpunt{
        height: 35%;
        border-radius: 10px;
    }
`;

function Input({data, type, name}) {
    return (
        <Div>
            <label htmlFor={name}>{data}</label>
            <input id={name} type={type} name={name} className="inpunt"/>
        </Div>
    );
}

export default Input;