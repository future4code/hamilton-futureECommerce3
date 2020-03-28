import React from 'react';
import styled from "styled-components";
//Adcionei o componene Card aqui
import Card from './Card'

class Basket extends React.Component {
    constructor(props) {
        super(props)
    }

renderizaCarrinho = () => {
    const arrayCarrinho=this.props.arrayCarrinho.map(elemento => {
        return (<p>{elemento.nome}</p>)
    })
    return arrayCarrinho
}

renderizarTotal = () => {
    let soma = 0;
    const somatorio = this.props.arrayCarrinho.forEach(elemento => {
        soma =soma + elemento.valor
        return soma
     });
    return (<p>Total:{soma}</p>)
}

render() {
    return (
  <ContainerBasket>
    <h2>Carrinho: </h2>
    {this.renderizaCarrinho()}
    {this.renderizarTotal()}
  </ContainerBasket>
    )
 }
}
// Container Basket
const ContainerBasket = styled.div`
  border: 2px dotted black;
  display:flex;
  flex-direction: column;
  padding: 8px
`
export default Basket;