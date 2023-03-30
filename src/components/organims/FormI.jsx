import styled from 'styled-components';
import CuatroFormI from '../atoms/CuatroFormI';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .form{
    margin: 3% 2%;
    width: 49%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 320px) and (max-width: 700px) {
      width: 100%;
    }
  }
  .img{
    @media screen and (min-width: 700px){
      width: 1%;
      display: none;
    }
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
          <div className='img'>
            {img}
          </div>
          {msn}
        </div>
        {contentF}
      </form>
      <CuatroFormI item={img}/>
    </Div>
  );
}

export default FormI;