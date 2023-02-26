import styled from "styled-components";

const StyledH1 = styled.h1`
    text-align: center;
`;


function NotFound() {
    return (
        <StyledH1>Error 404 pagina no encontrada</StyledH1>
    );
}

export default NotFound;