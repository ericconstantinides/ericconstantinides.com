import React from 'react'

const Introduction = props => {
  return (
    <section className='site-section'>
      <h2>Intro</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.introduction }}
        className='introduction u-kill-last-margin'
      />
    </section>
  )
}

export default Introduction
