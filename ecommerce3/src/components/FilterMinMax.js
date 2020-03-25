import React from "react";
import styled from "styled-components";


const ComponentFilterMinMax = styled.div`
    border: 1px solid blue;

`;
export class FilterMinMax extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <ComponentFilterMinMax>
                <p>Valor Mínimo</p>
                <input type="number"></input>
                <p>Valor Máximo</p>
                <input type="number"></input>
            </ComponentFilterMinMax>
        );
    }
}

export default FilterMinMax;