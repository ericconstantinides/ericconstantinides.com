import React from 'react'
import convertIngredient from './convertIngredient'
import { calculateDefaultWeight } from './convertIngredient'
import { vulgarFractions } from '../../data/recipe/units'

const MIN_MULTIPLIER = 0 // 0 will turn into half
const MAX_MULTIPLIER = 8
const SPILLAGE_GRAMS = 10

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
      <div className="u-mb-2">
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
  const displayMultiplier = currentMultiplier || vulgarFractions['1/2']
  return (
    <div className="u-pl-1">
      <h4 className="u-mt-0">
        <span>Recipe Size:</span> {displayMultiplier}
        <span className="u-tt-none">x</span>
      </h4>
      <div className="multiplier-slider__container u-d-f u-mb-2">
        <button
          className="multiplier-slider__button--minus"
          disabled={currentMultiplier === MIN_MULTIPLIER}
          onClick={onMultiplierChange(-1)}
        >
          -
        </button>
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
        >
          +
        </button>
      </div>
    </div>
  )
}
const ServingsSlider = props => {
  const { onServingsChange, servings, defaultServings, currentMultiplier } = props
  const min = Math.floor(defaultServings * currentMultiplier * 0.5)
  const max = Math.ceil(defaultServings * currentMultiplier * 1.5)
  return (
    <div className="u-pl-1">
      <h4 className="u-mt-0">
        <span>Servings:</span> {servings}
      </h4>
      <div className="multiplier-slider__container u-d-f u-mb-2">
        <button
          className="multiplier-slider__button--minus"
          disabled={servings === min}
          onClick={onServingsChange(-1)}
        >
          -
        </button>
        <input
          type="range"
          min={min}
          max={max}
          value={servings}
          id="servings"
          onChange={onServingsChange()}
        />
        <button
          className="multiplier-slider__button--plus"
          disabled={servings === max}
          onClick={onServingsChange(1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

const ServingSize = props => {
  const { defaultWeight, servings, currentMultiplier } = props
  const servingSize = Math.round(((defaultWeight - SPILLAGE_GRAMS) * currentMultiplier) / servings)
  return (
    <h4 className="u-pl-1 u-m-0">
      Approx Serving Size: {servingSize}
      <span className="u-tt-none">g</span>
    </h4>
  )
}

const Instructions = props => {
  const { instructions } = props
  return (
    <div>
      <h2>Instructions</h2>
      <ul>
        {instructions.map((instruction, i) => (
          <div key={i}>{Object.keys(instruction)[0]}</div>
        ))}
      </ul>
    </div>
  )
}

class Recipe extends React.Component {
  state = {
    measuringSystem: 'metric', // metric or imperial
    currentMultiplier: 1,
    servings: this.props.settings.servings
  }
  defaultServings = this.props.settings.servings
  defaultWeight = calculateDefaultWeight(this.props.ingredients)
  handleMeasuringSystemToggle = event => {
    event.preventDefault()
    this.setState(prevState => ({
      measuringSystem: prevState.measuringSystem === 'metric' ? 'imperial' : 'metric'
    }))
  }
  handleMultiplierChange = changeAmount => event => {
    const value = parseInt(event.target.value) // must extract value first
    this.setState(prevState => {
      const currentMultiplier =
        changeAmount === undefined
          ? value
          : parseInt(parseInt(prevState.currentMultiplier) + parseInt(changeAmount)) // must parseInt e'ything
      return { currentMultiplier, servings: this.defaultServings * (currentMultiplier || 0.5) }
    })
  }
  handleServingsChange = changeAmount => event => {
    const value = parseInt(event.target.value) // must extract value first
    this.setState(prevState => {
      const servings =
        changeAmount === undefined ? value : parseInt(prevState.servings) + parseInt(changeAmount) // must parseInt e'ything
      return { servings }
    })
  }
  render() {
    const { ingredients, settings, instructions, tips } = this.props
    const { measuringSystem, currentMultiplier: currentMultiplierRaw, servings } = this.state
    const currentMultiplier = currentMultiplierRaw || 0.5
    return (
      <div className="u-mb-2">
        <div className="u-d-f u-ai-c">
          <MeasuringSystemToggle
            measuringSystem={measuringSystem}
            onMeasuringSystemToggle={this.handleMeasuringSystemToggle}
          />
          <MultipliersSlider
            onMultiplierChange={this.handleMultiplierChange}
            {...{ currentMultiplier: currentMultiplierRaw }}
          />
          <ServingsSlider
            onServingsChange={this.handleServingsChange}
            {...{ servings, defaultServings: this.defaultServings, currentMultiplier }}
          />
          <ServingSize {...{ defaultWeight: this.defaultWeight, servings, currentMultiplier }} />
        </div>
        <Ingredients {...{ ingredients, measuringSystem, currentMultiplier }} />
        <Instructions {...{ instructions }} />
      </div>
    )
  }
}

export default Recipe
