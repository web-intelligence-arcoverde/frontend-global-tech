import react from "react";
import * as S from './styled';
import Desconto from '../../assets/desconto.png'
import Planos from '../../assets/planos.png'
import Suporte from '../../assets/suporte.png'
const MiniCard = () => {
    return (
        <>
            <S.H3>Motivos para nos escolher </S.H3>
            <S.MiniContainer>

                <S.MiniCard>
                    <h3><S.Icone src={Desconto} /> Preços com desconto</h3>
                    <S.Para>Desconto de 10% em pagamento tri-mestral</S.Para>
                </S.MiniCard>

                <S.MiniCard>
                    <h3><S.Icone src={Planos} /> Diversos Planos</h3>
                    <S.Para>Escolhar o plano com de acordo com sua necessidade </S.Para>
                </S.MiniCard>

                <S.MiniCard>
                    <h3><S.Icone src={Suporte} />Suporte  </h3>
                    <S.Para>Tenha certeza de que nossa equipe estará pronta para lhe atender em menos de 24hrs. </S.Para>
                </S.MiniCard>

            </S.MiniContainer>
        </>
    )
}

export default MiniCard;