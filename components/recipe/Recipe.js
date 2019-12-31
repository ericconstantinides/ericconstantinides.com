import React from 'react'
import convertIngredient from './convertIngredient'

const Ingredient = props => {
  const { ingredient, measuringSystem } = props
  const unit = ingredient.unit ? ingredient.unit : ''
  return (
    <li>
      <span>{convertIngredient(ingredient, measuringSystem)}</span>{' '}
      <strong>{ingredient.name}</strong>
    </li>
  )
}

class Ingredients extends React.Component {
  render() {
    const { ingredients, measuringSystem } = this.props
    console.log('ingredients:', ingredients)
    return (
      <div>
        <h2>Ingredients</h2>
        <ul>
          {Object.keys(ingredients).map(ingredient => (
            <Ingredient
              ingredient={ingredients[ingredient]}
              key={ingredient}
              measuringSystem={measuringSystem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const MeasuringSystemToggle = props => {
  const { measuringSystem, onMeasuringSystemToggle } = props
  console.log('measuringSystem:', measuringSystem)
  return (
    <div onClick={onMeasuringSystemToggle} className="u-mb-2 u-cursor-pointer">
      <span style={{ ...(measuringSystem === 'metric' ? { fontWeight: 'bold' } : {}) }}>
        Metric
      </span>
      &nbsp;|&nbsp;
      <span style={{ ...(measuringSystem === 'imperial' ? { fontWeight: 'bold' } : {}) }}>
        Imperial
      </span>
    </div>
  )
}

class Recipe extends React.Component {
  state = {
    measuringSystem: 'metric' // metric or imperial
  }
  handleMeasuringSystemToggle = event => {
    event.preventDefault()
    this.setState(prevState => ({
      measuringSystem: prevState.measuringSystem === 'metric' ? 'imperial' : 'metric'
    }))
  }
  render() {
    const { ingredients, settings, instructions, tips } = this.props
    const { measuringSystem } = this.state
    return (
      <div>
        <MeasuringSystemToggle
          measuringSystem={measuringSystem}
          onMeasuringSystemToggle={this.handleMeasuringSystemToggle}
        />
        <Ingredients ingredients={ingredients} measuringSystem={measuringSystem} />
      </div>
    )
  }
}

export default Recipe
