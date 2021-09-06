import react from "react";
import * as S from './styled'

import Roteador from '../../assets/roteador.png'
import Whatsapp from '../../assets/whatsapp.png'
import Relogio from '../../assets/relogio.png'
import Bussula from '../../assets/bussola.png'
import Escudo from '../../assets/escudo.png'
import Dados from '../../assets/dados.png'

const Secao3 = () => {
    return (
        <S.Container>
            <div>
                <S.Roteador src={Roteador} />
            </div>

            <div>
                <h3>Faça o pedido pelo Whatssap e ganhe um roteador wi-fi grátis</h3>
                <S.Para>Ter uma rede Wi-Fi na empresa ou em casa não é mais um luxo há muito tempo. A rede sem fio se tornou uma necessidade.
                    Celular, tablet, notebook e smart TV são equipamentos
                    que usamos todos os dias e somos dependentes. Por sua vez, todos
                    eles dependem de uma rede Wi-Fi eficiente.</S.Para>

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

                    <S.Botao type='button'>Fazer Pedido <S.Whats src={Whatsapp}/></S.Botao>
                </S.CardContainer>
            </div>


        </S.Container>
    )

}

export default Secao3;