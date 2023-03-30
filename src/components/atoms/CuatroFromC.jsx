import styled from 'styled-components';

const Div = styled.div`
    width: 40%;
    height: 623px;
    background-color: rgba(142, 152, 222, 0.7);
    margin-left: 52%;
    padding: 10% 10%;
    position: fixed;
    /* @media screen and (min-width: 320px) and (max-width: 700px){
        display: none;
    } */
`;

function CuatroFormC({item}) {
    return (
        <Div>
            {item}
        </Div>
    );
}

export default CuatroFormC;