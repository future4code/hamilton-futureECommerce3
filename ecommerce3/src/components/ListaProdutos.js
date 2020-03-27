import React from 'react'
import styled from 'styled-components'
import Card from './Card'

class ListaProdutos extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        
        //essa variável filtra o arrayProdutos (estado com os dados dos produtos). Compara o valor do input (this.props.valorMin) com o valor de cadaProduto (cadaProduto.valor). Retorna uma nova lista (listaMinimo). 
        const listaMinimo = this.props.arrayProdutos.filter(cadaProduto => {
            if (this.props.valorMin >= cadaProduto.valor) {
                return true
            }
        })

        console.log(listaMinimo)

        //listaCardMin vai mapear a listaMinino e retornar o Compente Card. 
        const listaCardMin = listaMinimo.map((cadaProduto, index) => {
            return (
                <Card
                    nomeProduto={cadaProduto.nome}
                    fotoProduto={cadaProduto.foto}
                    valorProduto={cadaProduto.valor}
                    key={index}
                />
            )
        })
        console.log("Lista Cards Min", listaCardMin)
        return (
            <div>
                <div>{listaCardMin}</div>
            </div>
        )
    }
}

export default ListaProdutos
