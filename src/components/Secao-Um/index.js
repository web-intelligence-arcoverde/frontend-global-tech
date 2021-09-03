import React from "react";
import * as S from './styled';
import Img from '../../assets/homem.png'
import Seta from '../../assets/seta-direita.png'
import Globo from '../../assets/globo.png'
import Computador from '../../assets/computador.png'
import Telefone from '../../assets/telefone.png'


const Secao1 = () => {

    return (
        <S.Container>
            <S.CardImg>
                <S.Img src={Img} />
            </S.CardImg>

            <S.Conteudo>
                <p>Você muda,você economiza</p>
                <h1>Obtenha mais do que importa para você</h1>
                <S.Secao>
                    <S.Card>
                        < S.Seta src={Seta} />
                        < S.Icone src={Globo} />
                        <h3>Para negocio</h3>
                        <S.H5>Loren ipsum dolor sit amet , &nbsp; consec</S.H5>
                    </S.Card>

                    <S.Card>
                        < S.Seta src={Seta} />
                        < S.Icone src={Computador} />
                        <h3>Para Computador</h3>
                        <S.H5>Loren ipsum dolor sit amet , &nbsp; consec</S.H5>
                    </S.Card>

                    <S.Card>
                        < S.Seta src={Seta} />
                        < S.Icone src={Telefone} />
                        <h3>Para Telefone</h3>
                        <S.H5>Loren ipsum dolor sit amet , &nbsp; consec</S.H5>
                    </S.Card>
                </S.Secao>
            </S.Conteudo>

        </S.Container>
    )
}
export default Secao1;