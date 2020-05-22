import React from 'react'

const Header = props => {
  const { image, name, email, location, phone, github, linkedin } = props
  return (
    <div className='site-section'>
      <header className='resume-header'>
        <div className='resume-header__image-wrapper'>
          <img
            className='resume-header__image'
            src={image}
            alt={name}
          />
        </div>
        <div className='resume-header__copy'>
          <h1 className='resume-header__title'>{name}</h1>
          <ul className='resume-header__meta'>
            <li className='resume-header__meta-item'>
              <a href={`mailto:${email}`} data-print-url='no'>
                {email}
              </a>
            </li>
            <li className='resume-header__meta-item'>
              <div className='resume-header__meta-inner-item'>
                {location}
              </div>
              {phone && <div className='resume-header__meta-inner-item'>
                {phone}
              </div>}
            </li>
            <li className='resume-header__meta-item social-links'>
              <a
                className='social-link social-link__github resume-header__meta-inner-item'
                href={`https://github.com/${github}`}
                title='GitHub'
                target='_blank'
                rel='noopener noreferrer'
              >
              </a>
              <a
                className='social-link social-link__linkedin resume-header__meta-inner-item'
                href={`https://linkedin.com/in/${linkedin}`}
                title='LinkedIn'
                target='_blank'
                rel='noopener noreferrer'
              >
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
