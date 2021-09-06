import react from "react";
import * as S from './styled'

import Setup from '../../assets/setup.png'
import Whatsapp from '../../assets/whatsapp.png'
import Relogio from '../../assets/relogio.png'
import Bussula from '../../assets/bussola.png'
import Escudo from '../../assets/escudo.png'
import Dados from '../../assets/dados.png'

const Secao2 = () => {
    return (
        <S.Container>
            

            <div>
                <h3>Para Pessoas Jurídicas</h3>
                <S.Para>150 Mega com Wi-Fi Plus + Proteção Digital por R$ 100,00/mês.
                     Tudo Junto e Conectado com o Seu Negócio.
                      Sua Empresa Digitalizada e Muito Mais.Venha conhecer a Global Tech  </S.Para>

                <S.CardContainer>

                    <S.MiniContainer>
                        <S.Card>
                            <S.Icone src={Relogio} />
                        </S.Card>
                        <S.Para2><S.Spam>Lorem ipsum</S.Spam><br /> uctor tincidunt ultricies tortor felis commodo sed at</S.Para2>
                    </S.MiniContainer>

                    <S.MiniContainer>
                        <S.Card>
                            <S.Icone src={Escudo} />
                        </S.Card>
                        <S.Para2><S.Spam>Lorem ipsum</S.Spam><br /> uctor tincidunt ultricies tortor felis commodo sed at</S.Para2>
                    </S.MiniContainer>

                    <S.MiniContainer>
                        <S.Card>
                            <S.Icone src={Bussula} />
                        </S.Card>
                        <S.Para2><S.Spam>Lorem ipsum</S.Spam><br /> uctor tincidunt ultricies tortor felis commodo sed at</S.Para2>
                    </S.MiniContainer>

                    <S.MiniContainer>
                        <S.Card>
                            <S.Icone src={Dados} />
                        </S.Card>
                        <S.Para2><S.Spam>Lorem ipsum</S.Spam><br /> uctor tincidunt ultricies tortor felis commodo sed at</S.Para2>
                    </S.MiniContainer>

                    <S.Botao type='button'>Fazer Pedido </S.Botao>
                </S.CardContainer>
            </div>

            <div>
                <S.Roteador src={Setup} />
            </div>

            <br/>
        </S.Container>
        
    )

}

export default Secao2;