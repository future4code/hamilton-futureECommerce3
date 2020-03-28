import React from 'react'
import styled from 'styled-components'


const ContainerLista = styled.section`
`

const CardContainer = styled.div` 
  border: 2px dotted orange;
  width: 200px;
  height: 370px;
  padding: 10px;
`
const CardImagem = styled.img` 
  width: 100%;
  height: 65%;
  object-fit: cover;
`
const CardButton = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  width: 200px;
  border: none;
  
  :hover{
    cursor: pointer;
    background-color: orange;
  }
`

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

 //2 Adicionei onClick 
 adicionaProduto = (nomeProduto) => {
   this.props.adicionarCarrinhoCard(nomeProduto)
 }

  render() {
    return (
      <ContainerLista>
        <CardContainer>
          <CardImagem src={this.props.fotoProduto} />
          <p>{this.props.nomeProduto}</p>
          <p>R$ {this.props.valorProduto}</p>
          <CardButton onClick = {()=> this.adicionaProduto(this.props.nomeProduto)}>Adicionar ao Carrinho</CardButton>
        </CardContainer>
      </ContainerLista>
    )
  }
}

export default Card 
