import react from "react";
import * as S from './styled'

import Roteador from '../../assets/roteador.png'
import Checkout from '../../assets/checkout.png'

const Secao2 = () => {
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
                <S.Icone src={Checkout} />

                </S.CardContainer>
            </div>


        </S.Container>
    )

}

export default Secao2;