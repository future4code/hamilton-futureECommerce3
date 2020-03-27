import React from 'react'
import styled from 'styled-components'
import Card from './Card'

class ListaProdutos extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
        //essa variável filtra o arrayProdutos (estado com os dados dos produtos). Compara o valor do input (this.props.filtroMinimo) com o valor de cadaProduto (cadaProduto.valor). Retorna uma nova lista (listaMinimo). 
        const listaMinimoMaximo = this.props.arrayProdutos.filter(cadaProduto => {
            if ((cadaProduto.valor >= this.props.filtroMinimo) 
                && (cadaProduto.valor <= this.props.filtroMaximo)) {
                return true
            }

            /* return listaOrdernacao = (listaMinimoMaximo) => {

            } */

        })


        //listaCardMin vai mapear a listaMinino e retornar o Compente Card. 
        const listaFiltrada = listaMinimoMaximo.map((cadaProduto, index) => {
            return (
                <Card
                    nomeProduto={cadaProduto.nome}
                    fotoProduto={cadaProduto.foto}
                    valorProduto={cadaProduto.valor}
                    key={index}
                />
            )
        })


        return (
                <div>{listaFiltrada}</div>
        )
    }
}

export default ListaProdutos
