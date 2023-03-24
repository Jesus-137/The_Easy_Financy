import styled from 'styled-components';
import Image1 from '../../assets/img/Imagen1.svg'
import Image2 from '../../assets/img/Imagen2.svg'
import Image3 from '../../assets/img/Imagen3.svg'
import Image4 from '../../assets/img/Imagen4.svg'

const Div = styled.div`
    margin: 0 2%;
`;

function Carusel() {
    return (
        <Div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="20000">
                        <img src={Image1} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Image2} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Image3} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Image4} class="d-block w-100"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </Div>
    );
}

export default Carusel;