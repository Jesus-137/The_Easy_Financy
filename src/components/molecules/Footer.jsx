import styled from "styled-components";
import Title from "../atoms/Title";
import Logo from "../atoms/Logo";
import SubTitle from "../atoms/Subtitle";
import Parrafo from "../atoms/Parrafo";
import Facebook from "../../assets/img/Facebook.svg";
import Twitter from "../../assets/img/Twitter.svg";
import Instagram from "../../assets/img/Instagram.svg";
import Gmail from "../../assets/img/Gmail.svg";

const StyledFooter = styled.footer`
    background-color: rgba(93, 106, 191, 0.87);
    margin-top: 5%;
    padding-bottom: 1%;
    border-top: 5px dashed #000000;
    display: flex;
    flex-direction: column;
    .Nosotros{
        margin: 0 3% ;
        border-top: 5px dashed #000000;
        border-bottom: 5px dashed #000000;
    }
    .redes{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;


function Footer() {
    return (
        <StyledFooter>
            <Title title={"Nuestras redes sociales"}/>
            <div className="redes">
                <Logo img={Facebook}/>
                <Logo img={Twitter}/>
                <Logo img={Instagram}/>
                <Logo img={Gmail}/>
            </div>
            <div className="Nosotros">
                <SubTitle subTitle={"Sobre nosotros"}/>
                <Parrafo msn={"Somo una empresa dedicada a ayudar a las micro empresas Mexicanas con su crecimiento y su progreso, para que no sean como la mayoría de las empresas, de esta forma ayudamos a que Mexico crezca gracias a las diversas nuevas empresas que podrán crecer con nuestra ayuda."}/>
            </div>
        </StyledFooter>
    );
}

export default Footer;