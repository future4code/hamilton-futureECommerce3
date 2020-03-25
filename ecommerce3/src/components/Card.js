import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div ` 
  border: 1px dotted orange;
`
const CardImagem = styled.img ` 
  height: 200px;
`
const CardButton = styled.button `
  color: white;
  background-color: black;
`


class Card extends React.Component {
    constructor (props) {
        super(props)
    }


render () {
    return (
        <CardContainer>
            <CardImagem src={this.props.fotoProduto}/>
            <p>{this.props.cardTexto}</p>
            <p>{this.props.cardPreco}</p>
            <CardButton>Adicionar ao Carrinho</CardButton>
        </CardContainer>
    )
  }
}

export default Card 
