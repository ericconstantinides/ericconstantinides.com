import Router from 'next/router'
import withGA from 'next-ga'
import '../scss/master.scss'

import React from 'react'
import App from 'next/app'

// unregister serviceworkers:
if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  // unregister the service worker if serviceWorker feature is disabled:
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}

// pass your GA code as first argument
export default withGA('UA-50643936-1', Router)(MyApp)