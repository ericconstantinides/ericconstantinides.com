import React from 'react'
import { splitArray } from '../../utils/utils'

const InitiativeSide = ({ items }) => (
  <div className='projects__column'>
    {items.map(item => (
      <div className='project project--skills' key={item.title}>
        <p className='project__inner project__meta u-mb-0'>
          <span className='project__title no-underline'>
            <span className='project__title-inner'>{item.title}</span>
          </span>{' '}
          - {item.info}
        </p>
      </div>
    ))}
  </div>
)

const Initiatives = ({ initiatives }) => {
  if (!initiatives || initiatives.length === 0) {
    return null
  }
  const splitInitiatives = splitArray(initiatives)
  return (
    <div className='job'>
      <div className='projects__container'>
        <InitiativeSide items={splitInitiatives[0]} />
        <InitiativeSide items={splitInitiatives[1]} />
      </div>
    </div>
  )
}

export default Initiatives
