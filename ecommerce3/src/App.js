import React from 'react';

// import Basket from './components/Basket';
import Card from './components/Card';
import Filter from './components/Filter';
import FilterOrder from './components/FilterOrder';
import ListaProdutos from './components/ListaProdutos';

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

      filterMin: null,
      filterMax: Infinity, 
    }
  }

  alteraMin = novoFilterMin => {
    if (novoFilterMin !== "") {
      this.setState({
        filterMin: novoFilterMin
      })
    } else {
      this.setState({
        filterMin: null
      })
    }
  }

  alteraMax = novoFilterMax => {
    if (novoFilterMax !== "") {
      this.setState({
        filterMax: novoFilterMax
      })
    } else {
      this.setState({
        filterMax: Infinity
      })
    }
  }

  render() {
    console.log("Valor filterMax:", this.state.filterMax)

    return (
      <div className="App">
        <Filter
          alteraMin={this.alteraMin}
          filtroMinimo={this.state.filterMin}
          alteraMax={this.alteraMax}
          filtroMaximo={this.state.filterMax}
        />
        <ListaProdutos
          //props do valor dos filtros
          filtroMinimo={this.state.filterMin}
          //props do arrayProdutos
          arrayProdutos={this.state.arrayProdutos}
          //props da função alteraMin 
          alteraMin={this.alteraMin}

          filtroMaximo={this.state.filterMax}
          alteraMax={this.alteraMax}
        />
      </div>
    );
  }
}

export default App;