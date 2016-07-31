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
      '1': <Content1 tab={tab} />, // can take this tab prop out at the end, just using to see if working
      '2': <Content2 tab={tab} />,
      '3': <Content3 tab={tab} />
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




