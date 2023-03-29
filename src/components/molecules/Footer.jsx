import styled from "styled-components";
import Title from "../atoms/Title";
import Logo from "../atoms/LogoRed";
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .Nosotros{
        margin: 0 3% ;
    }
    p{
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 0.9375rem;
        line-height: 20px;
        text-align: center;
        font-variant: small-caps;
    }
    .redes{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 20%;
    }
`;


function Footer() {
    return (
        <StyledFooter>
            <Title title={"Nuestras redes sociales"}/>
            <div className="redes">
                <Logo link={"https://www.facebook.com/"} img={Facebook}/>
                <Logo link={"https://twitter.com/"} img={Twitter}/>
                <Logo link={"https://www.instagram.com/"} img={Instagram}/>
                <Logo text={'221225@gmail.com'} img={Gmail}/>
            </div>
            <div className="Nosotros">
                <SubTitle subTitle={"Sobre nosotros"}/>
                <p>
                Somos una empresa dedicada ayudar a las microempresas Mexicanas con su crecimiento y su progreso para que no sean como la mayoría de las empresas, de esta forma ayudar a que México crecer gracias a las diversas nuevas empresas que podrán crecer con nuestra ayuda.
                </p>
            </div>
        </StyledFooter>
    );
}

export default Footer;