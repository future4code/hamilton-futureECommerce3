import React from "react";
import styled from "styled-components";


const ComponentFilterMinMax = styled.div`
    border: 1px solid blue;

`;
export class FilterMinMax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMin: null,
            filterMax: null
        }
    }

    onChangeFilterMin = (event) => {
        this.setState({filterMin: (Number(event.target.value))})
    }

    onChangeFilterMax = (event) => {
        this.setState({filterMax: (Number(event.target.value))})
    }

    render() {

        return (
            <ComponentFilterMinMax>
                <p>Valor Mínimo</p>
                <input 
                type="number"
                min="0" 
                max="10000"
                value={this.state.filterMin}
                onChange={this.onChangeFilterMin}
                ></input>

                <p>Valor Máximo</p>
                <input 
                type="number" 
                min="0" 
                max="10000"
                value={this.state.filterMax}
                onChange={this.onChangeFilterMax}
                ></input>
            </ComponentFilterMinMax>
        );
    }
}

export default FilterMinMax;