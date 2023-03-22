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
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-variant: all-small-caps;
    font-style: normal;
    font-size: 62.5%;
    padding: 0 2%;
    .inpunt{
        height: 35%;
        border-radius: 10px;
    }
    @media screen and (min-width: 320px) and (max-width: 400px) {
        font-size: 0.65rem;
    }
    @media screen and (min-width: 400px){
        font-size: 0.9rem;
    }
    @media screen and (min-width: 600px) and (max-width: 700px){
        font-size: 1rem;
    }
    @media screen and (min-width: 700px) and (max-width: 1500px){
        font-size: 1.5rem;
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