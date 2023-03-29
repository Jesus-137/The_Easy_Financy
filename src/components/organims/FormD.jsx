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
  }
  .logo{
    width: 60%;
    position: fixed;
    text-align: left;
  }
`;

function FormI({ msn, contentF, form, item1, item2}) {
  return (
    <Div>
      <form ref={form} className='form'>
        <div className='header'>
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

export default FormI;