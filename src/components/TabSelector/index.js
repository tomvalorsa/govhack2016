import React, { Component } from 'react'
import styles from './index.css'
import cssUtil from '../../cssUtil.css'
import cls from 'classnames'

export default class TabSelector extends Component {
  static defaultProps = {
    click: () => console.log('setting tab')
  }
  render() {
    let { activeTab, click } = this.props
    return (
      <div className={styles.container}>
        <Tab name="1" activeTab={activeTab} click={click} />
        <Tab name="2" activeTab={activeTab} click={click} />
        <Tab name="3" activeTab={activeTab} click={click} />
      </div>
    )
  }
}

const Tab = ({name, click, activeTab}) => {
  let tabStyles = [styles.tab]
  if (name === activeTab) tabStyles.push(styles.active)

  return (
    <div className={cls(tabStyles)} onClick={() => click(name)}>
      <div className={cssUtil.centred}>{name}</div>
    </div>
  )
}
