import React, { Component } from 'react'
import styles from './index.css'

export default class Legend extends Component {
  static defaultProps = {
    click: (name) => console.log(name)
  }
  render() {
    let { click, datasets } = this.props

    return (
      <div className={styles.container}>
        <LegendItem name="patents" color="#4CAF50" click={click} datasets={datasets} />
        <LegendItem name="trademarks" color="#2196F3" click={click} datasets={datasets} />
        <LegendItem name="designs" color="#f44336" click={click} datasets={datasets} />
      </div>
    )
  }
}

const LegendItem = ({name, color, click, datasets}) => {
  let dotColor = datasets[name] ? color : '#BDBDBD'
  let labelColor = datasets[name] ? '#000' : '#BDBDBD'

  return (
    <div className={styles.legendItem} onClick={() => click(name)}>
      <div className={styles.dot} style={{backgroundColor: dotColor}}></div>
      <div className={styles.label} style={{color: labelColor}}>{name}</div>
    </div>
  )
}
