import React from 'react'
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends React.Component {
  
  state = {
    pizzas: [],
    pizzaToEdit: {
      "id": null,
      "topping": "",
      "size": "",
      "vegetarian": null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(data => this.setState({
      pizzas: data
    }))
  }

  handleEdit = pizzaObj => {
    this.setState({
      pizzaToEdit: pizzaObj
    })
  }

  handleToppingChange = e => {
    // console.log('logging e', e)
    this.setState({
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        topping: e
      }
    })
    // console.log('logging this.state.pizzaToEdit.topping', this.state.pizzaToEdit.topping)
  }

  handleSizeChange = e => {
    // console.log('logging e', e)
    this.setState({
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        size: e
      }
    })
  }

  handleVegChange = e => {
    // console.log('logging e', e)
    this.setState({
      pizzaToEdit: {
        ...this.state.pizzaToEdit,
        vegetarian: !e
      }
    })
    // console.log(this.state.pizzaToEdit.vegetarian)
  }

  handleSubmit = pizzaObj => {
    // console.log(pizzaObj)
    fetch(`http://localhost:3000/pizzas/${pizzaObj.id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(pizzaObj)
    })
    .then(res => res.json())
    .then(data => fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    })))
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <PizzaForm handleToppingChange={this.handleToppingChange} handleSizeChange={this.handleSizeChange} handleVegChange={this.handleVegChange} handleNotVegChange={this.handleNotVegChange} handleSubmit={this.handleSubmit} pizzaToEdit={this.state.pizzaToEdit} />
        <PizzaList handleEdit={this.handleEdit} pizzas={this.state.pizzas} />
      </React.Fragment>
    )
  }

}

export default App
