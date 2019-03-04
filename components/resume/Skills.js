import React from 'react'

const Skills = props => {
  function renderSkills (item) {
    return (
      <div className='project project--skills' key={item.skill}>
        <p className='project__inner project__meta u-mb-0'>
          <span className='project__title no-underline'>
            <span className='project__title-inner'>{item.skill}</span>
          </span>
          , {item.subSkills.join(', ')}
        </p>
      </div>
    )
  }
  function renderType (item) {
    const leftSkills = item.skills
      .filter((project, index) => {
        return index + 1 <= Math.round(item.skills.length / 2)
      })
      .map(renderSkills)
    const rightSkills = item.skills
      .filter((project, index) => {
        return index + 1 > Math.round(item.skills.length / 2)
      })
      .map(renderSkills)
    return (
      <div className='job' key={item.type}>
        <header className='job__header'>
          <div className='job__header-left'>
            <h3 className='job__title'>
              {item.human}
              <div className='job__subtitle'>{item.meta}</div>
            </h3>
          </div>
          <div className='job__header-right' />
        </header>
        <div className='projects__container'>
          <div className='projects__column'>{leftSkills}</div>
          <div className='projects__column'>{rightSkills}</div>
        </div>
      </div>
    )
  }
  return (
    <section className='site-section print-avoid-break'>
      <h2>Skills</h2>
      {props.items.map(renderType)}
    </section>
  )
}
export default Skills
