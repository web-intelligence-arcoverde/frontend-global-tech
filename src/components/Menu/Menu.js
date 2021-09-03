import react from "react";
import * as S from './styled'

const Menu = () => {
    return(
        <S.Container>
        <div>
            <h1><S.Trecho>Global </S.Trecho> Tech </h1>
        </div>

        <div>
            <S.Menu>
                <S.Lista>Tarifas</S.Lista>
                <S.Lista>Serviços</S.Lista>
                <S.Lista>Negócios</S.Lista>
                <S.Lista>Contato</S.Lista>
                <S.Botao type="button">Pedido</S.Botao>
            </S.Menu>
            
        </div>

        
            
        
        </S.Container>
    )
}

export default Menu;