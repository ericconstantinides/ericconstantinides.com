import Layout from '../components/Layout'

import Header from '../components/resume/Header'
import Introduction from '../components/resume/Introduction'
import Experience from '../components/resume/Experience'
import Skills from '../components/resume/Skills'

import meta from '../data/meta'
import introduction from '../data/introduction'
import skills from '../data/skills'
import experience from '../data/experience'
import education from '../data/education'

const Resume = () => (
  <Layout {...{
    metaDescription: meta.metaDescription,
    title: 'Resume | Eric Constantinides'
  }}>
    <div className='site-container'>
      <Header {...meta} />
      <Introduction introduction={introduction.resume} />
      <Experience name='Experience' propsClass='' items={experience} />
      <Skills items={skills} />
      <Experience
        name='Education'
        propsClass='job--no-padding'
        items={education}
      />
    </div>
  </Layout>
)

export default Resume