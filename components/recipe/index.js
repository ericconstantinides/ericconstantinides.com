import React from 'react'
import Recipe from './Recipe'

class index extends React.Component {
  render() {
    return (
      <Recipe {...this.props} />
    )
  }
}

export default index
