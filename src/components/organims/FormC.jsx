import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0 1%;
    .form{
        width:51%;
        margin-top: 5%;
        z-index: 1;
        position: static;
        flex-direction: column;
        background-color: white;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding-bottom: 2%;
        @media screen and (min-width: 320px) and (max-width: 700px){
            width: 100%;
            box-shadow: 0px 0px 0px;
        }
    }
    .header{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-bottom: 4%;
    }
    .cuatro{
        width: 50%;
        @media screen and (min-width: 320px) and (max-width: 700px){
            display: none;
        }
    }
    .logoH{
        width: 60%;
        position: static;
        @media screen and (min-width: 700px){
            display: none;
        }
    }
    .logo{
        width: 20%;
        position: relative;
        right: 70%;
        margin-top: 10%;
        @media screen and (min-width: 320px) and (max-width: 700px){
            display: none;
        }
    }
`;

function FormC({logo, msn, contentF, form, cuatro}) {
  return (
    <Div>
        <div className='logo'>
            {logo}
        </div>
        <Div>
            <form ref={form} className='form'>
                <div className='header'>
                    <div className='logoH'>
                        {logo}
                    </div>
                    {msn}
                </div>
                {contentF}
            </form>
            <div className='cuatro'>
                {cuatro}
            </div>
        </Div>
    </Div>
  );
}

export default FormC;