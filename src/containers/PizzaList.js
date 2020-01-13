import React from 'react'
import Pizza from '../components/Pizza'

class PizzaList extends React.Component {

  render() {
    let pizzas = this.props.pizzas
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
            {
            pizzas.map((pizza, index) => <Pizza handleEdit={this.props.handleEdit} pizza={pizza} key={index} />)
            }
        </tbody>
      </table>
    )
  }

}

export default PizzaList
