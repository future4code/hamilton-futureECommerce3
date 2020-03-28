import React from "react";
import styled from "styled-components";


const ComponentFilter = styled.div`
    padding: 15px;
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
                <h2>Filtros</h2>
                <p>Valor Mínimo:</p>
                <input 
                    type="number"
                    min="0" 
                    max="10000"
                    value={this.props.filtroMinimo}
                    onChange={this.onChangeFilterMin}
                    placeholder="Valor Mínimo"
                >                    
                </input>

                <p>Valor Máximo:</p>
                <input 
                    type="number" 
                    min="0" 
                    max="10000"
                    value={this.props.filtroMaximo}
                    onChange={this.onChangeFilterMax}
                    placeholder="Valor Máximo"
                >                    
                </input>

                <p>Buscar Produto:</p>
                <input 
                   type="text"
                   value={this.props.filterItem}
                   onChange={this.onChangeFilterItem}
                   placeholder="Digite o número"
                >                    
                </input>

                
            </ComponentFilter>
        );
    }
}

export default Filter;