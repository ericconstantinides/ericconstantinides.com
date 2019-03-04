import React from 'react'
import Initiatives from './Initiatives'

const splitArray = arr => [
  arr.filter((item, index) => index + 1 <= Math.round(arr.length / 2)),
  arr.filter((item, index) => index + 1 > Math.round(arr.length / 2))
]

const Experience = props => {
  function renderProjects (project) {
    const title = project.alt_title ? project.alt_title : project.title
    return (
      <article className='project' key={project.id}>
        <p className='project__inner project__meta'>
          <span className='project__title'>
            <span className='project__title-inner'>{title}</span>
          </span>{' '}
          <span className='project__date'>({project.date}) </span>
          <span className='project__position'>{project.role}</span>,{' '}
          {project.primary_tech.join(', ')}
        </p>
      </article>
    )
  }
  function renderPosition (position) {
    const meta = position.meta ? (
      <span className='job__position-meta'> ({position.meta})</span>
    ) : (
      ''
    )
    return (
      <div className='job__position' key={position.title}>
        <p>
          <strong>
            {position.title}
            {meta}:
          </strong>{' '}
          {position.info}
        </p>
      </div>
    )
  }
  function renderExperienceItems (item) {
    const date = item.startDate
      ? item.startDate + (item.endDate ? ' - ' + item.endDate : '')
      : ''
    const location = item.location ? (
      <span>
        {' '}
        in <span className='job__header-location'>{item.location}</span>
      </span>
    ) : (
      ''
    )
    const splitProjects = item.projects ? splitArray(item.projects) : null
    const leftProjects = splitProjects && splitProjects[0].map(renderProjects)
    const rightProjects = splitProjects && splitProjects[1].map(renderProjects)
    return (
      <article key={item.name} className='job print-avoid-break'>
        <header className='job__header'>
          <div className='job__header-left'>
            <h3 className='job__title'>
              {item.name}
              <div className='job__subtitle'>
                {item.description}
                {location}
              </div>
            </h3>
          </div>
          <div className='job__header-right'>
            <div className='job__header-date'>{date}</div>
          </div>
        </header>
        <div className='job__content'>{item.position.map(renderPosition)}</div>
        <Initiatives initiatives={item.initiatives} />
        {item.projects && item.projects.length > 0 && (
          <div className='projects__container'>
            <div className='projects__column'>{leftProjects}</div>
            <div className='projects__column'>{rightProjects}</div>
          </div>
        )}
      </article>
    )
  }
  return (
    <section className={`${props.propsClass} site-section`}>
      <h2>{props.name}</h2>
      {props.items.map(renderExperienceItems)}
    </section>
  )
}
export default Experience
