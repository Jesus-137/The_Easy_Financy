import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    width: 100%;
    margin-top: 2%;
    height: 45px;
    .inpunt{
        border-radius: 5px;
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