import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div ` 
  border: 2px dotted orange;
  width: 200px;
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
            <p>{this.props.nomeProduto}</p>
            <p>{this.props.valorProduto}</p>
            <CardButton>Adicionar ao Carrinho</CardButton>
        </CardContainer>
    )
  }
}

export default Card 
