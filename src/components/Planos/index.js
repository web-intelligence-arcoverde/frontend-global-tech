import React from "react";
import * as S from './styled'
import Foguete from '../../assets/foguete.png'
import Camaro from '../../assets/camaro.png'
import Moto from '../../assets/moto.png'
import Basico from '../../assets/basico.png'

const Planos = () => {
    return (
        <S.Container>
            <S.ContainerCard>
                <S.Card>
                    <h1>Super Velocidade</h1>
                    <p>Internet 100% fibra</p>
                    <h5> <S.Destaque>200</S.Destaque>GB</h5>
                    <p>Wi-fi de alta Perfomance </p>
                    <p>Instalação inclusa</p>
                    <h5><S.Destaque> 120,00 </S.Destaque>R$ </h5>
                </S.Card>

                <S.IconeCard>
                    <S.ImgFoguete src={Foguete} />
                </S.IconeCard>

            </S.ContainerCard>

            <S.ContainerCard2>
                <S.Card>
                    <h1>Alta Velocidade</h1>
                    <p>Internet 100% fibra</p>
                    <h5> <S.Destaque>150</S.Destaque>GB</h5>
                    <p>Wi-fi de alta Perfomance </p>
                    <p>Instalação inclusa</p>
                    <h5><S.Destaque> 100,00 </S.Destaque>R$ </h5>
                </S.Card>

                <S.IconeCard>
                    <S.ImgFoguete src={Camaro} />
                </S.IconeCard>

            </S.ContainerCard2>

            <S.ContainerCard3>
                <S.Card>
                    <h1>Velocidade Média</h1>
                    <p>Internet 100% fibra</p>
                    <h5> <S.Destaque>150</S.Destaque>GB</h5>
                    <p>Wi-fi de alta Perfomance </p>
                    <p>Instalação inclusa</p>
                    <h5><S.Destaque> 100,00 </S.Destaque>R$ </h5>
                </S.Card>

                <S.IconeCard>
                    <S.ImgFoguete src={Moto} />
                </S.IconeCard>

            </S.ContainerCard3>

            <S.ContainerCard4>
                <S.Card>
                    <h1>Plano Estudante</h1>
                    <p>Internet 100% fibra</p>
                    <h5> <S.Destaque>150</S.Destaque>GB</h5>
                    <p>Wi-fi de alta Perfomance </p>
                    <p>Instalação inclusa</p>
                    <h5><S.Destaque> 100,00 </S.Destaque>R$ </h5>
                </S.Card>

                <S.IconeCard>
                    <S.Icone4 src={Basico} />
                </S.IconeCard>

            </S.ContainerCard4>

        </S.Container>
    )
}

export default Planos;