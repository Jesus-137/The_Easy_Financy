import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 100%;
    background: #9CA9FF;
    margin-left: -68%;
    margin-top: 3%;
    position: static;
`;

function CuatroFormCenterB({item}) {
    return (
        <Div>
            {item}
        </Div>
    );
}

export default CuatroFormCenterB;