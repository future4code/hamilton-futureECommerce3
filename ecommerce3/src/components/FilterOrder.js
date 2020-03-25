import React from 'react'
import styled from 'styled-components'

const FilterOrder = styled.div`
`


class FilterOrder extends React.Component {
    constructor(props){
        super(props);

    }
}

render(){
    return (
        <FilterOrder>
            <span>Preço: </span>
            <select>
                <option>Decrescente</option>
                <option>Crescente</option>
            </select>

        </FilterOrder>

    )
}
export default FilterOrder