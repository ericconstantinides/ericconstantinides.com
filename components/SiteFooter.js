import React from 'react'

const SiteFooter = () => {
  return (
    <footer className='u-ta-c site-footer print-hide'>
      <div className='site-container'>
        <p className='site-footer__p'>
          &copy; {new Date().getFullYear()} Eric Constantinides
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
