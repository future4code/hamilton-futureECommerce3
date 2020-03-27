import React from "react";
import styled from "styled-components";


const ComponentFilter = styled.div`
    border: 1px solid blue;

`;
export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    onChangeFilterMin = (event) => {
        this.props.alteraMin(event.target.value)
    }


    onChangeFilterMax = (event) => {
        this.props.alteraMax(event.target.value)
    }

    onChangeFilterItem = (event) => {
        this.props.alteraItem(event.target.value)
    }


    render() {
        return (
            <ComponentFilter>
                <h2>Filtros:</h2>
                <p>Valor Mínimo:</p>
                <input 
                    type="number"
                    min="0" 
                    max="10000"
                    value={this.props.filtroMinimo}
                    onChange={this.onChangeFilterMin}
                >                    
                </input>

                <p>Valor Máximo:</p>
                <input 
                    type="number" 
                    min="0" 
                    max="10000"
                    value={this.props.filtroMaximo}
                    onChange={this.onChangeFilterMax}
                >                    
                </input>

                <p>Buscar Produto:</p>
                <input 
                   type="text"
                   value={this.props.filterItem}
                   onChange={this.onChangeFilterItem}
                >                    
                </input>
            </ComponentFilter>
        );
    }
}

export default Filter;