import React from 'react';

// import Basket from './components/Basket';
import Card from './components/Card';
import FilterMinMax from './components/FilterMinMax';
import FilterOrder from './components/FilterOrder';
import FilterSearch from './components/FilterSearch';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import img7 from './img/7.png';
import img8 from './img/8.jpg';


class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      arrayProdutos: [
        {
          nome: "Produto 1",
          foto: img1,
          valor: 100.00
        },
        {
          nome: "Produto 2",
          foto: img2,
          valor: 156.00
        },
        {
          nome: "Produto 3",
          foto: img3,
          valor: 700.00
        },
        {
          nome: "Produto 4",
          foto: img4,
          valor: 1100.00
        },
        {
          nome: "Produto 5",
          foto: img5,
          valor: 892.00
        },
        {
          nome: "Produto 6",
          foto: img6,
          valor: 4000.00
        },
        {
          nome: "Produto 7",
          foto: img7,
          valor: 899.90
        },
        {
          nome: "Produto 8",
          foto: img8,
          valor: 5740.75
        }
      ],
    }
  }

 
  render() {

    const copiaArrayProdutos = this.state.arrayProdutos.map(produto => {
      return [...this.state.arrayProdutos]
    })


    const produtosCard = this.state.arrayProdutos.map((produto, index) => {
      return (
        <Card 
          nomeProduto = {produto.nome}
          fotoProduto = {produto.foto}
          valorProduto = {produto.valor}
          key = {index}
        />
      );
    })

    // console.log(produtosFoto)

    return (
      <div className="App">
{/*         <div>{ produtosCard }</div> */}
        <FilterMinMax propsArrayProdutos = {copiaArrayProdutos} />
        <FilterOrder />
        <FilterSearch />
      </div>
    );
  }
}

export default App;