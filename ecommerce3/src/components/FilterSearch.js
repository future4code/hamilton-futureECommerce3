import React from 'react';
import styled from 'styled-components';

const ComponenteFilterSearch = styled.div `
    /* border: 1px solid black; */
    text-align: left;
    max-width: 230px;
`

class FilterSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    
    
    render() {
        return (
            <ComponenteFilterSearch>
                <p>Buscar Produto</p>
                <input type="text"></input>
            </ComponenteFilterSearch>
        )
    }
}

export default FilterSearch;