import Head from 'next/head'

import '../scss/master.scss'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-50643936-1')

/**
 * @return {null}
 */
function Analytics(props) {
  ReactGA.set({ page: props.location.pathname + props.location.search })
  ReactGA.pageview(props.location.pathname + props.location.search)
  return null
}

/* // unregister serviceworkers:
if ('serviceWorker' in navigator) {
  // unregister the service worker if serviceWorker feature is disabled:
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
} */

const Layout = (props) => (
  <div className='App'>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <title>{props.title ? props.title : 'Eric Constantinides'}</title>
      <meta name="description" content={props.metaDescription ? props.metaDescription : ''} />
      <link rel="icon" type="image/png" href="/static/favicon.png" />
      <link href='//fonts.googleapis.com/css?family=Oswald:400,300|Quattrocento+Sans:400,700,400italic' rel='stylesheet' type='text/css' />
    </Head>
    <SiteHeader />
    {props.children}
    <SiteFooter />
  </div>
)

export default Layout