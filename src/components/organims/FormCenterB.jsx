import styled from 'styled-components';

const Div = styled.div`
    width: 76%;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    left: 300px;
    .form{
        width: 50%;
        margin-bottom: 5%;
        margin-top: 5%;
        z-index: 1;
        padding: 5%;
        position: static;
        flex-direction: column;
        background-color: white;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    @media screen and (min-width: 320px) and (max-width: 700px){
        position: static;
        width: 100%;
    }
`;

function FormCenterB({ msn, contentF, form, cuatro}) {
  return (
    <Div>
        <div className='cuatro'>
            {cuatro}
        </div>
        <form ref={form} className='form'>
            <div className='header'>
                {msn}
            </div>
            {contentF}
        </form>
    </Div>
  );
}

export default FormCenterB;