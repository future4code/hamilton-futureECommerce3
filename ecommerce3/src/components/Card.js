import React from 'react'
import styled from 'styled-components'


const ContainerLista = styled.section`
`

const CardContainer = styled.div` 
  border: 2px dotted orange;
  width: 200px;
`
const CardImagem = styled.img` 
  width: 200px;
  object-fit: cover;
`
const CardButton = styled.button`
  color: white;
  background-color: black;
  padding: 15px;
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
