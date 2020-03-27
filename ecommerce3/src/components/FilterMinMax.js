import React from "react";
import styled from "styled-components";


const ComponentFilterMinMax = styled.div`
    border: 1px solid blue;

`;
export class FilterMinMax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    onChangeFilterMin = (event) => {
        this.props.alteraMin(event.target.value)
    }

    // onChangeFilterMax = (event) => {
    //     this.setState({filterMax: (Number(event.target.value))})
    // }

    render() {

        // const listaFiltroMinMax = props.propsArrayProdutos.filter((produto) => {
        //     if (produto.valor >= this.state.filterMin) {
        //         return true
        //     }

        //     if(produto.valor <= this.state.filterMax) {
        //         return true
        //     }
        // })
        

        // console.log("Resultado", listaFiltroMinMax)
        // console.log(this.state.filterMin)

        return (
            <ComponentFilterMinMax>
                <p>Valor Mínimo</p>
                <input 
                    type="number"
                    min="0" 
                    max="10000"
                    value={this.props.filtroMinimo}
                    onChange={this.onChangeFilterMin}
                >                    
                </input>

                <p>Valor Máximo</p>
                <input 
                    type="number" 
                    min="0" 
                    max="10000"
                    // value={this.state.filterMax}
                    // onChange={this.onChangeFilterMax}
                >                    
                </input>
            </ComponentFilterMinMax>
        );
    }
}

export default FilterMinMax;