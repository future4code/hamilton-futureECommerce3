import React from 'react'
import styled from 'styled-components'


const ContainerLista = styled.section`

`

const CardContainer = styled.div` 
  border: 2px dotted orange;
  width: 200px;
`
const CardImagem = styled.img` 
  height: 200px;
`
const CardButton = styled.button`
  color: white;
  background-color: black;
  width: 200px;
`

class Card extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <ContainerLista>
        <CardContainer>
          <CardImagem src={this.props.fotoProduto} />
          <p>{this.props.nomeProduto}</p>
          <p>R$ {this.props.valorProduto}</p>
          <CardButton>Adicionar ao Carrinho</CardButton>
        </CardContainer>
      </ContainerLista>
    )
  }
}

export default Card 
