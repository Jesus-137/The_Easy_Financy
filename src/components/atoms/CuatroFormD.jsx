import styled from 'styled-components';

const Div = styled.div`
    width: 52%;
    position: fixed;
    .content{
        width: 100%;
        height: 430px;
        margin-top: 2%;
        padding-top: 25%;
        background-color: rgba(142, 152, 222, 0.7);
    }
`;

function CuatroFormD({item1, item2}) {
    return (
        <Div>
            {item1}
            <div className='content'>
                {item2}
            </div>
        </Div>
    );
}

export default CuatroFormD;