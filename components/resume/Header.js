import React from 'react'

const Header = props => {
  return (
    <div className='site-section'>
      <header className='resume-header'>
        <div className='resume-header__image-wrapper'>
          <img
            className='resume-header__image'
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className='resume-header__copy'>
          <h1 className='resume-header__title'>{props.name}</h1>
          <ul className='resume-header__meta'>
            <li className='resume-header__meta-item'>
              <a href={`mailto:${props.email}`} data-print-url='no'>
                {props.email}
              </a>
            </li>
            <li className='resume-header__meta-item'>
              <div className='resume-header__meta-inner-item'>
                {props.location}
              </div>
              <div className='resume-header__meta-inner-item'>
                {props.phone}
              </div>
            </li>
            <li className='resume-header__meta-item social-links'>
              <a
                className='social-link social-link__github u-hide-text resume-header__meta-inner-item'
                href={`//github.com/${props.github}`}
                title='GitHub'
                target='_blank'
                rel='noopener noreferrer'
                data-print-url={`github.com/${props.github}`}
              >
                github.com/{props.github}
              </a>
              <a
                className='social-link social-link__linkedin u-hide-text resume-header__meta-inner-item'
                href={`//linkedin.com/in/${props.linkedin}`}
                title='LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
                data-print-url={`linkedin.com/in/${props.linkedin}`}
              >
                linkedin.com/in/{props.linkedin}
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
