import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const ContainerListaProdutos = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 9%;
`


class ListaProdutos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        //essa variável filtra o arrayProdutos (estado com os dados dos produtos). Compara o valor dos inputs (this.props.filtroMinimo e this.props.filtroMaximo) com o valor de cadaProduto (cadaProduto.valor). Retorna uma nova lista (lista filtrada). 
        const listaMinimoMaximo = this.props.arrayProdutos.filter(cadaProduto => {
            if ((cadaProduto.valor >= this.props.filtroMinimo)
                && (cadaProduto.valor <= this.props.filtroMaximo)) {
                return true
            }
        }).filter(cadaProduto => {
            const nomeProduto = cadaProduto.nome.toLowerCase()
            if (nomeProduto.includes(this.props.filterItem)) {
                return true
            }
        })
      
        //listaCardMin vai mapear a listaMininoMaximo e retornar o Compente Card. 
        const listaFiltrada = listaMinimoMaximo.map((cadaProduto, index) => {
            return (
                <Card
                    nomeProduto={cadaProduto.nome}
                    fotoProduto={cadaProduto.foto}
                    valorProduto={cadaProduto.valor}
                    key={index}
                    //Adcionando a prop do Lista do Produto para o Card
                    adicionarCarrinhoCard = {this.props.adicionarCarrinho}
                />
            )
        })

        return (
            <ContainerListaProdutos>
                 {listaFiltrada}
            </ContainerListaProdutos>
        )
    }
}

export default ListaProdutos
