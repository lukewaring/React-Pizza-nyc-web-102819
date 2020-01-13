import React from "react"

const PizzaForm = props => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={ (e) => props.handleToppingChange(e.target.value) } type="text" className="form-control" placeholder="Pizza Topping" value={props.pizzaToEdit.topping ? props.pizzaToEdit.topping : ''}/>
        </div>
        <div className="col">
          <select onChange={ (e) => props.handleSizeChange(e.target.value) } value={props.pizzaToEdit.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={ (e) => props.handleVegChange(e.target.checked) } className="form-check-input" type="radio" value="Vegetarian" checked={props.pizzaToEdit.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={ (e) => props.handleVegChange(e.target.checked) } className="form-check-input" type="radio" value="Not Vegetarian" checked={props.pizzaToEdit.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button onClick={ () => props.handleSubmit(props.pizzaToEdit) } type="submit" className="btn btn-success">Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
