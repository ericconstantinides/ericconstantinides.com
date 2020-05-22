import React from 'react'

const PortfolioItem = props => {
  let externalLink = ''
  if (props.active) {
    externalLink = (
      <span>
        {' '}
        <a
          className='external-link'
          href={`//${props.website}`}
          title={props.website}
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit&nbsp;Site
        </a>
      </span>
    )
  }
  return (
    <article
      className='portfolio-item portfolio-item--large print-avoid-break'
      data-id={props.id}
    >
      <div className='portfolio-item__inner'>
        <div className='portfolio-item__image-wrapper'>
          <img
            className='portfolio-item__image'
            src={'/images/' + props.screenshot}
            alt={`${props.title} screenshot`}
          />
        </div>
        <div className='portfolio-item__content'>
          <h3 className='kicker'>
            <span>{props.role}</span>
            <span>{props.date}</span>
          </h3>
          <h2 className='portfolio-item__title'>{props.title}</h2>
          <p>
            {props.description}
            {externalLink}
          </p>
          <p className='portfolio-item__tech'>
            <strong>Primary Technologies:</strong>{' '}
            {props.primary_tech.join(', ')}
          </p>
        </div>
      </div>
    </article>
  )
}

export default PortfolioItem
