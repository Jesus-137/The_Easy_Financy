import styled from 'styled-components';
import CuatroFormI from '../atoms/CuatroFormI';
import Logo from '../atoms/Logo';
import logo from '../../assets/img/TEF.png';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .form{
    margin: 3% 2%;
    width: 49%;
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
`;

function FormI({img, msn, contentF, form}) {
  return (
    <Div>
      <form ref={form} className='form'>
        <div className='header'>
          {msn}
        </div>
        {contentF}
      </form>
      <CuatroFormI item={img}/>
    </Div>
  );
}

export default FormI;