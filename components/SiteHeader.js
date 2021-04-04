import Link from 'next/link'

const SiteHeader = () => (
  <section className="site-header__container valprop valprop--portfolio">
    <div className="main-nav__container">
      <div className="site-container">
        <nav className="main-nav">
          <Link href="/">
            <span className="main-nav__item">
              Home<span className="u-small-hide--inline"> / Portfolio</span>
            </span>
          </Link>
          <Link href="/resume">
            <span className="main-nav__item">Resume</span>
          </Link>
          <a
            href="/Eric_Constantinides_resume.pdf"
            className="main-nav__item main-nav__item--pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Literally the resume page saved as a PDF"
          >
            PDF Resume
          </a>
          {/* <a
            href="https://www.muddlingthroughcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="main-nav__item external-link external-link--white"
          >
            Blog
          </a> */}
        </nav>
      </div>
    </div>
    {/* <header className='site-header valprop__header'>
      <div className='site-container'>
        <h1 className='site-header__title valprop__title'>
          Eric Constantinides' Portfolio
        </h1>
      </div>
      <div className='site-header__intro-container intro__container'>
        <div className='site-container'>
          <p className='site-header__intro intro' />
        </div>
      </div>
    </header> */}
  </section>
)

export default SiteHeader
