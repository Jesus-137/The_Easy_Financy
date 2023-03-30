import styled from 'styled-components';

const Div = styled.div`
    width: 76%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0 2%;
    margin: 0 2%;
    .form{
        width:50%;
        margin-top: 1%;
        margin-bottom: 2%;
        z-index: 1;
        position: static;
        flex-direction: column;
        background-color: white;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding-bottom: 2%;
        @media screen and (min-width: 320px) and (max-width: 700px){
            width: 700%;
            margin-top: 50%;
        }
    }
    .header{
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        margin-bottom: 4%;
    }
    .cuatro{
        width: 50%;
    }
`;

function FormC2({logo, msn, contentF, form, cuatro}) {
  return (
    <Div>
        <form ref={form} className='form'>
            <div className='header'>
                {logo}
                {msn}
            </div>
            {contentF}
        </form>
        <div className='cuatro'>
            {cuatro}
        </div>
    </Div>
  );
}

export default FormC2;