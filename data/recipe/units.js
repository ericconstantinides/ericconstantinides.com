const units = {
  gram: {
    abbr: 'g',
    singular: 'gram',
    plural: 'grams',
    category: 'weight',
    system: 'metric'
  },
  milliliter: {
    abbr: 'ml',
    singular: 'milliliter',
    plural: 'milliliters',
    category: 'volume',
    system: 'metric'
  },
  liter: {
    abbr: 'l',
    singular: 'liter',
    plural: 'liters',
    category: 'volume',
    system: 'metric'
  },
  Fahrenheit: {
    abbr: 'F',
    singular: 'Fahrenheit',
    category: 'temperature',
    system: 'imperial'
  },
  Celsius: {
    abbr: 'C',
    singular: 'Celsius',
    category: 'temperature',
    system: 'metric'
  },
  ounce: {
    abbr: 'oz',
    singular: 'ounce',
    plural: 'ounces',
    category: 'volume',
    system: 'imperial'
  },
  teaspoon: {
    abbr: 'tsp',
    singular: 'teaspoon',
    plural: 'teaspoons',
    category: 'volume',
    system: 'imperial'
  },
  tablespoon: {
    abbr: 'Tbsp',
    singular: 'tablespoon',
    plural: 'tablespoons',
    category: 'volume',
    system: 'imperial'
  },
  cup: {
    abbr: 'cup',
    singular: 'cup',
    plural: 'cups',
    category: 'volume',
    system: 'imperial'
  },
  pint: {
    abbr: 'pt',
    singular: 'pint',
    plural: 'pints',
    category: 'volume',
    system: 'imperial'
  },
  quart: {
    abbr: 'qt',
    singular: 'quart',
    plural: 'quarts',
    category: 'volume',
    system: 'imperial'
  },
  gallon: {
    abbr: 'gal',
    singular: 'gallon',
    plural: 'gallons',
    category: 'volume',
    system: 'imperial'
  },
  pound: {
    abbr: 'lb',
    singular: 'pound',
    plural: 'pounds',
    category: 'weight',
    system: 'imperial'
  }
}

const units2 = {
  volume: {
    imperial: {

    },
    metric: {

    }
  },
  mass: {
    imperial: {

    },
    metric: {

    }
  },
  temperature: {
    imperial: {
      F: {
        singular: 'Fahrenheit',
        category: 'temperature',
      }
    },
    metric: {
      C: {
        singular: 'Celsius',
        category: 'temperature',
      }
    }
  }
}

export const vulgarFractions = {
  '1/2': '½',
  '1/3': '⅓',
  '2/3': '⅔',
  '1/4': '¼',
  '3/4': '¾',
  '1/8': '⅛',
  '3/8': '⅜',
  '5/8': '⅝',
  '7/8': '⅞'
}

export default units