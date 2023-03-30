import styled from 'styled-components';
import CuatroFormD from '../atoms/CuatroFormD';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 0 1%;
  padding-bottom: 2%;
  .form{
    width:51%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 320px) and (max-width: 700px) {
      width: 100%;
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
    width: 62%;
    margin: 3% 0 3% 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    @media screen and (min-width: 320px) and (max-width: 700px){
      display: none;
    }
  }
  .logo{
    width: 70%;
    position: fixed;
    text-align: left;
  }
  .logoH{
    width: 30%;
    position: static;
    @media screen and (min-width: 700px){
      display: none;
    }
  }
`;

function FormD({ msn, contentF, form, item1, item2}) {
  return (
    <Div>
      <form ref={form} className='form'>
        <div className='header'>
          <div className='logoH'>
            {item1}
          </div>
          {msn}
        </div>
        {contentF}
      </form>
      <div className='cuatro'>
        <div className='logo'>
          {item1}
        </div>
        <CuatroFormD item2={item2}/>
      </div>
    </Div>
  );
}

export default FormD;