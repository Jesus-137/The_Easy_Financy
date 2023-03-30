import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    text-align: start;
    font-size: 62.5%;
    margin-top: 3%;
    width: 100%;
    .inpunt{
        background: #D9D9D9;
        border-radius: 20px;
        height: 50px;
        border-radius: 10px;
        border: 0;
        @media screen and (min-width: 320px) and (max-width: 400px) {
            width: 96%;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.875rem;
    }
    @media screen and (min-width: 400px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 700px){
        font-size: 1rem;
    }
    @media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 1.94rem;
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