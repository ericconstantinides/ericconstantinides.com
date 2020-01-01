import React from 'react'

const getIngredient = (ing, ingredients) => {
  return ingredients.find(thisIng => thisIng.name === ing)
}


const settings = {
  oven: {
    temperature: 350,
    unit: 'Fahrenheit',
    minutes: 55
  },
  cool: {
    minutes: 15
  },
  servings: 5 // need to fix so that it works with 4.6666666
}

const ingredients = [
  {
    name: 'almond flour',
    amount: 150,
    unit: 'gram'
  },
  {
    name: 'psyllium husk powder',
    amount: 45,
    unit: 'gram'
  },
  {
    name: 'baking powder',
    amount: 10,
    unit: 'gram'
  },
  {
    name: 'salt',
    amount: 6,
    unit: 'gram'
  },
  {
    name: 'apple cider vinegar',
    amount: 10,
    unit: 'gram'
  },
  {
    name: 'egg',
    amount: 2
  },
  {
    name: 'water',
    amount: 225,
    unit: 'gram'
  },
  {
    name: 'rosemary',
    amount: 1.5,
    unit: 'gram'
  },
  {
    name: 'thyme',
    amount: 1.5,
    unit: 'gram'
  }
]

const instructions = [
  {
    'Add and briefly blend dry ingredients': [
      getIngredient('Almond Flour', ingredients),
      getIngredient('Psyllium Husk Powder', ingredients),
      getIngredient('Baking Powder', ingredients),
      getIngredient('Salt', ingredients),
      getIngredient('Apple Cider Vinegar', ingredients)
    ]
  },
  {
    'Prep boiling water and oven': [
      <>Start {getIngredient('Water', ingredients)} (in microwave) to use later</>,
      <>Set oven to {settings.oven.amount}º</>
    ]
  },
  {
    'Add and briefly blend wet ingredients': [
      getIngredient('Apple Cider Vinegar', ingredients),
      getIngredient('Eggs', ingredients)
    ]
  },
  'Mix in boiling water for ~30-45 seconds',
  {
    'Add rolls to cookie sheet': [
      <>Number of rolls = (weight of bowl with dough - 10g - bowl empty bowl) / {settings.roll}</>,
      <>Wet hands and create {settings.roll} rolls on silicone (or parchment) sheet on cookie sheet</>
    ]
  },
  <>Cook rolls on center rack for {settings.oven.minutes} minutes @{settings.oven.temperature}°</>,
  <>Cool rolls on drying rack to firm-up for at least 15 minutes</>
]

const tips = [
  'Firmly ball-up the rolls so there are no cracks. Once balled up, they can be flattened for sandwich rolls',
  'Make sure psyllium husk powder is finely ground; if your psyllium husk resembles sand (like what they sell at Whole Foods) instead of powder, add psyllium husk fiber to high-speed blender for 30 seconds',
  'don\'t over mix the dough after adding boiling water',
  'be careful not to cook the eggs when adding the boiling water',
  'When baking, leave at least 1 roll length between each roll for adequate rising',
  'Buy Rosemary and Thyme in bulk (fresher and vastly cheaper) from Whole Foods or Sprouts',
]

export default {ingredients, settings, instructions, tips}