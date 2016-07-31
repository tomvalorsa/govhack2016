import React, { Component } from 'react'
import styles from './index.css'
import { connect } from 'react-redux'
import { setWordcloudYear, setWordcloudType } from 'actions/wordcloud'
import { yearRanges } from 'reducers/wordcloud'
import cssUtil from '../../cssUtil.css'
import cls from 'classnames'

class WordCloud extends Component {
  getImage() {
    let { type, year } = this.props

    return <img src={require(`../../images/${type}_${year}.png`)} />
  }
  render() {
    let { type, year, setYear, setType } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          {this.getImage()}
        </div>
        <div className={styles.yearContainer}>
          <TabSet type={type} year={year} setYear={setYear} setType={setType} />
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    type: state.wordcloud.type,
    year: state.wordcloud.year
  }
}, {setYear: setWordcloudYear, setType: setWordcloudType})(WordCloud)


class TabSet extends Component {
  render() {
    let { type, year, setYear, setType } = this.props

    // For borders
    let activeColor = {
      'Trademarks': '#2196F3',
      'Patents': '#4CAF50',
      'Designs': '#f44336'
    }

    let activeBorder = `1px solid ${activeColor[type]}`

    return (
      <div className={styles.tabSetContainer}>
        <div className={styles.typeContainer}>
          {['Patents', 'Trademarks', 'Designs'].map(name => {
            let style = {}
            if (name === type) {
              style.borderBottom = activeBorder
            }
            return (
              <div className={styles.typeTab} key={name} onClick={() => setType(name)}>
                <div className={cssUtil.centred} style={style}>{name}</div>
              </div>
            )
          })}
        </div>
        <div className={styles.yearTabContainer}>
          {yearRanges[type].map(value => {
            let style = {}
            if (value === year) {
              style.borderBottom = activeBorder
            }
            return (
              <div className={styles.yearTab} key={value} onClick={() => setYear(value)}>
                <div className={cssUtil.centred} style={style}>{value}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}