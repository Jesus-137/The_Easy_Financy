import styled from 'styled-components';

const Div = styled.div`
    width: 52%;
    position: fixed;
    margin-top: 7%;
    .content{
        width: 100%;
        height: 430px;
        margin-top: 2%;
        padding-top: 25%;
        background-color: rgba(142, 152, 222, 0.7);
        @media screen and (min-width: 320px) and (max-width: 700px){
            display: none;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 700px){
        display: none;
    }
`;

function CuatroFormD({item2}) {
    return (
        <Div>
            <div className='content'>
                {item2}
            </div>
        </Div>
    );
}

export default CuatroFormD;