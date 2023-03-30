import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 3% 0 5% 20%;
    width: 60%;
    background-color: #9CA9FF;
    padding: 1% 3%;
    border-radius: 31px;
    .inpunt{
        width: 100%;
        border-radius: 20px;
        height: 50px;
        border: 0;
        padding-left: 2%;
        @media screen and (min-width: 320px) and (max-width: 400px) {
            width: 96%;
            height: 30px;
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

function InputBuscar({ type, placeholder }) {
    return (
        <Div>
            <input type={type} name={"buscar"} className="inpunt" placeholder={placeholder}/>
        </Div>
    );
}

export default InputBuscar;