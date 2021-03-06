import React, { Component } from 'react'
import styles from './index.css'

import { connect } from 'react-redux'

import Map from '../Map'
import About from '../About'
import Sidebar from '../Sidebar'
import TabSelector from '../TabSelector'
import ContentPane from '../../components/ContentPane'
import StateContent from '../StateContent'
import WordCloud from '../WordCloud'

class App extends Component {
  getContent() {
    let { tab } = this.props

    let contentRef = {
      'National': <CartoDbIframe />,
      'State': <StateContent />,
      'Projects': <WordCloud />
    }

    return contentRef[tab] || null
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <Sidebar />
        </div>
        <div className={styles.right}>
          <TabSelector />
          <ContentPane>
            {this.getContent()}
          </ContentPane>
        </div>
        <About />
      </div>
    )
  }
}

export default connect(state => {
  return {
    tab: state.app.tab
  }
}, {})(App)


const CartoDbIframe = () => (
  <iframe
    width="100%"
    height="100%"
    frameBorder="0"
    src="https://ol-arup.carto.com/viz/abe8c824-56c7-11e6-b881-0e3ebc282e83/embed_map">
  </iframe>
)
