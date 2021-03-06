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
  const displayMultiplier = currentMultiplier || vulgarFractions['1/2']
  return (
    <div className="">
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
    <div className="">
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
    <h4 className="u-m-0">
      Approx Serving Size: {servingSize}
      <span className="u-tt-none">g</span>
    </h4>
  )
}

const Tips = props => {
  const { tips, measuringSystem } = props
  return (
    <div className="">
      <h2>Tips</h2>
      <ul>
        {tips.map((tip, i) => {
          return <li key={i} >{tip}</li>
        })}
      </ul>
    </div>
  )
}

const Meta = props => {
  const { metaItem } = props
  return (
    <li>
      {metaItem.text}
    </li>
  )
}

const Settings = props => {
  const { settings: { meta }, measuringSystem } = props
  return (
    <div className="u-mb-2">
      <h2>Meta</h2>
      <ul>
        {meta.map((metaItem, i) => {
          return <Meta key={i} metaItem={metaItem} />
        })}
      </ul>
    </div>
  )
}

const Instruction = props => {
  const { text, ingredients, instructions } = props.instruction
  const subInstructions = instructions ? <Instructions {...{ instructions }} /> : ''
  return (
    <li>
      {text}
      {subInstructions}
    </li>
  )
}

const Instructions = props => {
  const { instructions } = props
  return (
    <ul>
      {instructions.map((instruction, i) => (
        <Instruction key={i} {...{ instruction }} />
      ))}
    </ul>
  )
}

const InstructionsWrapper = props => {
  const { instructions } = props
  return (
    <div>
      <h2>Instructions</h2>
      <Instructions {...{ instructions }} />
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
        <div className="layout--equal layout--start-750px u-mb-2">
          <div className='layout__col'>
            <div className="layout--equal layout--start-350px">
              <div className='layout__col'>
                <MeasuringSystemToggle
                  measuringSystem={measuringSystem}
                  onMeasuringSystemToggle={this.handleMeasuringSystemToggle}
                />
              </div>
              <div className='layout__col'>
                <MultipliersSlider
                  onMultiplierChange={this.handleMultiplierChange}
                  {...{ currentMultiplier: currentMultiplierRaw }}
                />
              </div>
            </div>
          </div>
          <div className='layout__col'>
            <div className="layout--equal layout--start-350px">
              <div className='layout__col'>
                <ServingsSlider
                  onServingsChange={this.handleServingsChange}
                  {...{ servings, defaultServings: this.defaultServings, currentMultiplier }}
                />
              </div>
              <div className='layout__col'>
                <ServingSize {...{ defaultWeight: this.defaultWeight, servings, currentMultiplier }} />
              </div>
            </div>
          </div>
        </div>
        <Settings {...{settings, measuringSystem}} />
        <div className="layout--equal">
          <div className="layout__col">
            <Ingredients {...{ ingredients, measuringSystem, currentMultiplier }} />
          </div>
          <div className="layout__col">
            <InstructionsWrapper {...{ instructions }} />
          </div>
        </div>
        <Tips {...{tips, measuringSystem}} />
      </div>
    )
  }
}

export default Recipe
