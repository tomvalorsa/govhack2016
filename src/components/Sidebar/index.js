import React, { Component } from 'react'
import styles from './index.css'
import cssUtil from '../../cssUtil.css'

export default class Sidebar extends Component {
  static defaultProps = {
    tab: '1'
  }
  getContent() {
    let { tab } = this.props

    let contentRef = {
      'National': <Content1 tab={tab} />,
      'State': <Content2 tab={tab} />,
      'Projects': <Content3 tab={tab} />
    }

    return contentRef[tab]
  }
  render() {
    return (
      <div className={styles.container}>
        {this.getContent()}
      </div>
    )
  }
}

const Content1 = ({tab}) => (
  <div className={styles.contentContainer}>
    <div className={styles.title}>{tab}</div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit beatae ad voluptates dignissimos placeat error voluptatem at ut tempore maxime magni doloremque ullam suscipit ex, voluptate iusto, commodi? Sint, neque.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate iure voluptas, est delectus ratione provident corporis? Deleniti quia neque laboriosam accusamus eaque, dolore, adipisci quaerat reiciendis, molestiae ab minus.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere minus dignissimos enim, reiciendis dolor incidunt error obcaecati omnis eius consectetur, nemo, velit! Accusamus nulla, assumenda nihil explicabo vel, atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia commodi repudiandae quas sint, incidunt voluptate, blanditiis cum magni odit, iste voluptatibus excepturi dolore soluta suscipit vel deserunt recusandae at beatae!
    </p>

    <p>Data sets used:</p>
    <ul>
      <li>this thing</li>
      <li>that thing</li>
    </ul>
  </div>
)

const Content2 = ({tab}) => (
  <div className={styles.contentContainer}>
    <div className={styles.title}>{tab}</div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit beatae ad voluptates dignissimos placeat error voluptatem at ut tempore maxime magni doloremque ullam suscipit ex, voluptate iusto, commodi? Sint, neque.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptate iure voluptas, est delectus ratione provident corporis? Deleniti quia neque laboriosam accusamus eaque, dolore, adipisci quaerat reiciendis, molestiae ab minus.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere minus dignissimos enim, reiciendis dolor incidunt error obcaecati omnis eius consectetur, nemo, velit! Accusamus nulla, assumenda nihil explicabo vel, atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia commodi repudiandae quas sint, incidunt voluptate, blanditiis cum magni odit, iste voluptatibus excepturi dolore soluta suscipit vel deserunt recusandae at beatae!
    </p>

    <p>Data sets used:</p>
    <ul>
      <li>this thing</li>
      <li>that thing</li>
    </ul>
  </div>
)

const Content3 = ({tab}) => (
  <div className={styles.contentContainer}>
    <div className={styles.title}>{tab}</div>

    <p>
      This data set lets you explore the Trademark, Patent and Design database key words, as mentioned in the application description. As you step through time from the 1990s for the trademark data, these word clouds highlight the most common elements of innovation throughout that decade right up to 2015 datasets.
    </p>

    <p>
      The trademark data sets span over 100 years with the first application for trademark within this dataset being from 1906.
    </p>

    <p>
      The design datasets span over 50 years, ranging from 1972 through to 2015.
    </p>

    <p>
      The Patent dataset only spans for 2 decades, with the first data available to download being from 2003.
    </p>

    <p>Data sets used:</p>
    <ul>
      <li>this thing</li>
      <li>that thing</li>
    </ul>
  </div>
)




