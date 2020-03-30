import React from 'react'
import styled from 'styled-components'

const ContainerFilterOrder = styled.div`
`


class FilterOrder extends React.Component {
    constructor(props){
        super(props);

    }


    render() {
        return (
            <ContainerFilterOrder>
                <span>Preço: </span>
                <select>
                    <option>Decrescente</option>
                    <option>Crescente</option>
                </select>

            </ContainerFilterOrder>

        )
    }
}
export default FilterOrder