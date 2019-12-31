import units from '../../data/recipe/units'
import pantry from '../../data/recipe/pantry'
import { vulgarFractions } from '../../data/recipe/units'

/**
 * I think I'm going to have grams as the way for now... we can update this later
 * convertIngredient needs to do a few things:
 * 1. Convert to active system's pantry servingSize unit (if necessary)
 * 2. Convert to new system's pantry servingSize
 * 3. determine the best unit to show new value
 * 4. round up/down by n%
 * 5. for imperial, show ½, ⅓, ⅔, ¼, ¾, ⅛, ⅜, ⅝, ⅞
 *
 * @param {*} ingredient
 * @param {*} newSystem
 */
const convertIngredient = (ingredient, newSystem) => {
  const unit = ingredient.unit ? ingredient.unit : ''
  if (newSystem === 'metric' || !ingredient.unit || units[unit].system === newSystem) {
    // no conversion necessary:
    return ingredient.amount + (units[unit] ? units[unit].abbr : '')
  }

  // convert(ingredient.amount).from(units[unit].abbr).to('cup')

  const imperialAmount = convertToImperial(ingredient)
  const correctImperial = chooseCorrectImperial(imperialAmount)
  const roundedImperial = roundImperial(correctImperial)
  const fractionalImperial = makeFraction(roundedImperial)

  return prettifyImperial(fractionalImperial)
}

const convertToImperial = ingredient => {
  const { amount, name } = ingredient
  return {
    amount: (amount * pantry[name].imperial.amount) / pantry[name].metric.amount,
    unit: pantry[name].imperial.unit
  }
}

/**
 * keep teaspoons:   tsp_amount < 3
 * keep tablespoons: tbsp_amount >= 1 && tbsp_amount < 4
 * keep cups:        cup_amount >= 0.25 && cup_amount < 16
 *
 * @param {*} imperialAmount
 */
const chooseCorrectImperial = imperialAmount => {
  const { amount, unit } = imperialAmount
  if (unit === 'teaspoon') {
    if (amount >= 3) {
      return chooseCorrectImperial({
        amount: amount / 3,
        unit: 'tablespoon'
      })
    }
  } else if (unit === 'tablespoon') {
    if (amount < 1) {
      return chooseCorrectImperial({
        amount: amount * 3,
        unit: 'teaspoon'
      })
    } else if (amount >= 4) {
      return chooseCorrectImperial({
        amount: amount / 16,
        unit: 'cup'
      })
    }
  } else if (unit === 'cup') {
    if (amount < 0.25) {
      return chooseCorrectImperial({
        amount: amount * 4,
        unit: 'tablespoon'
      })
    }
  }
  return imperialAmount
}

const roundImperial = imperialAmount => {
  const { amount, unit } = imperialAmount
  // I need to FIRST test either granularity of 3 vs 8 and choose the one with lower remainder
  const granularity = amount < 2 ? 8 : 4
  const newAmount = Math.round(amount * granularity) / granularity
  return {
    amount: newAmount,
    unit
  }
}

const makeFraction = imperialAmount => {
  const testDenominator = (amount, denominator) => {
    const fractionalPartAsDecimal = amount % 1
    const roundedAmount = Math.round(fractionalPartAsDecimal * denominator) / denominator
    return Math.abs(fractionalPartAsDecimal - roundedAmount)
  }

  const { amount } = imperialAmount
  const fractional = amount % 1
  const amountMinusFraction = amount - fractional
  const denominators = [8, 4, 3, 2, 1]
  let winningDiff
  let winningDenominator
  denominators.forEach(denominator => {
    const diff = testDenominator(amount, denominator)
    if (winningDiff === undefined || diff <= winningDiff) {
      winningDiff = diff
      winningDenominator = denominator
    }
  })

  const winningNumerator = Math.round(fractional / (1 / winningDenominator))
  const wholeNumber = amountMinusFraction === 0 ? '' : amountMinusFraction
  return {
    ...imperialAmount,
    wholeNumber,
    numerator: winningNumerator,
    denominator: winningDenominator
  }

  // the winner is the lowest denominator that also has the lowest difference
  // I also think I only want to use 1/8 denominator IF amount is less than 1 cup // ok, won't do that for now
}

const prettifyImperial = imperialAmount => {
  const { amount, unit, wholeNumber, numerator, denominator } = imperialAmount
  if (numerator === 0) {
    return wholeNumber + ' ' + unit
  }
  return (
    (wholeNumber === 0 ? '' : wholeNumber + ' ') +
    (vulgarFractions[numerator + '/' + denominator] || numerator + '/' + denominator) + ' ' + unit
  )
}

export default convertIngredient
