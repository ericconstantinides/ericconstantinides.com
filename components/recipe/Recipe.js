import React from 'react'
import convertIngredient from './convertIngredient'

const MIN_MULTIPLIER = 1
const MAX_MULTIPLIER = 6

const Ingredient = props => {
  const { ingredient, measuringSystem, currentMultiplier } = props
  return (
    <li>
      <span>
        {convertIngredient(
          { ...ingredient, amount: ingredient.amount * currentMultiplier },
          measuringSystem,
          currentMultiplier
        )}
      </span>{' '}
      <strong>{ingredient.name}</strong>
    </li>
  )
}

class Ingredients extends React.Component {
  render() {
    const { ingredients, measuringSystem, currentMultiplier } = this.props
    return (
      <div>
        <h2>Ingredients</h2>
        <ul>
          {Object.keys(ingredients).map(ingredient => (
            <Ingredient
              ingredient={ingredients[ingredient]}
              key={ingredient}
              measuringSystem={measuringSystem}
              currentMultiplier={currentMultiplier}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const MeasuringSystemToggle = props => {
  const { measuringSystem, onMeasuringSystemToggle } = props
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

const MultipliersSlider = props => {
  const { currentMultiplier, onMultiplierChange } = props
  return (
    <div className="multiplier-slider__container">
      <button
        className="multiplier-slider__button--minus"
        disabled={currentMultiplier === MIN_MULTIPLIER}
        onClick={onMultiplierChange(-1)}
      />
      <input
        type="range"
        min={MIN_MULTIPLIER}
        max={MAX_MULTIPLIER}
        value={currentMultiplier}
        id="mymultiplier"
        onChange={onMultiplierChange()}
      />
      <button
        className="multiplier-slider__button--plus"
        disabled={currentMultiplier === MAX_MULTIPLIER}
        onClick={onMultiplierChange(1)}
      />
    </div>
  )
}

class Recipe extends React.Component {
  state = {
    measuringSystem: 'metric', // metric or imperial
    currentMultiplier: 1
  }
  handleMeasuringSystemToggle = event => {
    event.preventDefault()
    this.setState(prevState => ({
      measuringSystem: prevState.measuringSystem === 'metric' ? 'imperial' : 'metric'
    }))
  }
  handleMultiplierChange = changeAmount => event => {
    const currentMultiplier =
      changeAmount === undefined
        ? event.target.value
        : (this.state.currentMultiplier + changeAmount) * 1
    this.setState({ currentMultiplier })
  }
  render() {
    const { ingredients, settings, instructions, tips } = this.props
    const { measuringSystem, currentMultiplier } = this.state
    console.log('currentMultiplier:', currentMultiplier)
    return (
      <div>
        <MeasuringSystemToggle
          measuringSystem={measuringSystem}
          onMeasuringSystemToggle={this.handleMeasuringSystemToggle}
        />
        <MultipliersSlider
          onMultiplierChange={this.handleMultiplierChange}
          {...{ currentMultiplier }}
        />
        <Ingredients {...{ ingredients, measuringSystem, currentMultiplier }} />
      </div>
    )
  }
}

export default Recipe
