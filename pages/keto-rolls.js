import Layout from '../components/Layout'
import Recipe from '../components/recipe'
import ketoRolls from '../data/keto-rolls'

const KetoRolls = () => (
  <Layout {...{
    metaDescription: 'Keto Rolls are a delicious, nutritious substitute for gluten bread rolls.',
    title: 'Keto Rolls | Eric Constantinides'
  }}>
    <div className='site-container'>
      <h1>Keto Rolls</h1>
      <Recipe {...ketoRolls} />
    </div>
  </Layout>
)

export default KetoRolls