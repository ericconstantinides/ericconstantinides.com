// import BodyClassName from 'react-body-classname'
// import DocumentTitle from 'react-document-title'

import PortfolioItem from '../components/PortfolioItem'
import Layout from '../components/Layout'

import projects from '../data/projects'
import introduction from '../data/introduction'
import meta from '../data/meta'

const Index = () => (
  <Layout {...{
    metaDescription: meta.metaDescription,
    title: 'Eric Constantinides | A web app developer'
  }}>
    <section className='site-section portfolio__section'>
      <div className='site-container'>
        <header className='header portfolio__header'>
          <h1>Eric Constantinides' Portfolio</h1>
          <p>{introduction.homepage}</p>
          <h2>Projects</h2>
        </header>
        {projects.map(item => <PortfolioItem {...item} key={item.id} />)}
      </div>
    </section>
  </Layout>
)

export default Index