import react from "react";
import * as S from './styled';
import Facebook from '../../assets/facebook.png';
import Linkedin from '../../assets/inkedin.png';
import Intagram from '../../assets/instagram.png';
import Gps from '../../assets/gps.png';
import Mensagem from '../../assets/mensagem.png';
import Telefone from '../../assets/telefone2.png';



const Footer = () => {

    return (
        <S.Main>
        <S.Container>
            <S.Card>
                <h3>Informações</h3>
                <p>Termos de uso</p>
                <p>Politica de segurança</p>
                <p>Sobre nós</p>
            </S.Card>

            <S.Card>
                <h3>Comunicação</h3>
                <p><S.Icones src={Telefone}></S.Icones>+55 87 99105 4786</p>
                <p><S.Icones src={Mensagem} ></S.Icones>paulinho_marques2012@hotmail.com</p>
                <p ><S.Icones src={Gps}></S.Icones>Avenida Osvaldo Cruz  1500</p>
            </S.Card>

            <S.ContainerRedes>
                <h3>Nossas Redes Sociais</h3>
                <S.RedesSocias>
                    <S.Icones src={Facebook} />
                    <S.Icones src={Linkedin} />
                    <S.Icones src={Intagram} />
                </S.RedesSocias>
            </S.ContainerRedes>


        </S.Container>
        <S.FooterPara>©Todos os direitos reservados 2021</S.FooterPara>
        </S.Main>
    )

}
export default Footer;