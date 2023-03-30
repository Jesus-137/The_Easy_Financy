import styled from "styled-components";
import SubTitle from '../atoms/Subtitle'
import Logo from "../atoms/LogoRed";
import TitleF from "../atoms/TitleF";
import Parrafo from "../atoms/Parrafo";
import Facebook from "../../assets/img/Facebook.svg";
import Twitter from "../../assets/img/Twitter.svg";
import Instagram from "../../assets/img/Instagram.svg";
import Gmail from "../../assets/img/Gmail.svg";

const StyledFooter = styled.footer`
    background: #8893D6;
    margin-top: 5%;
    padding-bottom: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .Nosotros{
        margin: 3% 3% ;
    }
    p{
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 0.9375rem;
        line-height: 20px;
        text-align: center;
        font-variant: small-caps;
        @media screen and (min-width: 320px) and (max-width: 400px){
            font-size: 0.313rem;
            font-weight: 300;
            line-height: 7px;
            text-align: center;
            margin: 0;
        }
    }
    .redes{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 70%;
        @media screen and (min-width: 400px){
            width: 40%;
            margin: 0;
        }
    }
`;


function Footer() {
    return (
        <StyledFooter>
            <TitleF title={"Nuestras redes sociales"}/>
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