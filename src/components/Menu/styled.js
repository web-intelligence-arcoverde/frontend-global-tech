import styled from 'styled-components'

export const Container =styled.div`
display: flex;
justify-content:space-between;
width: 100%;
height: 80px;
align-items: center;
border-top: 1px solid gray;
`

export const Menu =styled.nav`

display:flex;
align-items: center;
justify-content:flex-start;
`

export const Lista =styled.li `

width: 77px;
margin-left: 100px;
:hover{
    cursor: pointer;
    color:#52891d;
}
`

export const Botao =styled.button`
background:#FF4D4D ;
width: 180px;
height: 50px;
border-radius: 5px;
color: white;
font-size: 1.3rem;
border: none;
`

export const Trecho =styled.span`

color:#C3FFC2;
background: #000000;
border-radius:10px;
margin: 5px;
`
