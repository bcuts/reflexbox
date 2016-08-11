
import React from 'react'
import Header from './Header'
import Readme from './Readme'
import Examples from './Examples'
import Footer from './Footer'

import { connectMediaContext } from 'react-media-context'

class Root extends React.Component {
  render () {
    const { examples } = this.props

    return (
      <div className='blue'>
        <Header {...this.props} />
        <Readme />
        <Examples examples={examples} />
        <Footer />
      </div>
    )
  }
}

export default connectMediaContext()(Root)

