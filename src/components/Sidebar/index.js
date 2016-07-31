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
      Australia has been ranked number 17 in the Global Innovation Index with a score of 55.2 for 2015. Australia has maintained its 17th position from the Index in 2014 and increased two ranks for 2013 where we were ranked 19.
    </p>

    <p>
      The <a href="https://www.globalinnovationindex.org/analysis-economy">Global Innovation Index</a> is a culmination of various aspects of the economy including property, human capital, infrastructure, market sophistication, business sophistication, knowledge and technology outputs and creative outputs. Australia excels at a number of these sub-indices and our key strengths include ease of starting a business, school life expectancy, tertiary enrolement QS university ranking, ICT, environmental performace, intensity of local competition and online creativity.
    </p>

    <p>
      This showcases 100 years of innovation using Patent, Design and Trademark data across Australia. On a global scale, you can see Australia emerging with famous ideas such as the Hills Hoist, wifi, cochlear implants. These ideas are joined by hundreds of thousands on other IP applications. As you watch this application, you can see the Innovation market explode throughout Australia, clearly identifying the city areas as the key place for the Innovative Economy.
    </p>

    <p>
      We have also geocoded the list of Australian Universities as the correlation between Universities and innovation is a key relationship that has been highlighted.
    </p>

    <p>Datasets used:</p>
    <ul>
      <li>Intellectual Property Government Open Data 2016</li>
      <li>Global Innovation Index 2015</li>
      <li>Universities Australia: University Profiles</li>
    </ul>
  </div>
)

const Content2 = ({tab}) => (
  <div className={styles.contentContainer}>
    <div className={styles.title}>{tab}</div>

    <p>
      This map allows you to explore the datasets on a state level for Patents, Designs and Trademarks. This map plays through time and shows the innovative ideas as they emerge.
    </p>
    <p>
      The Patent and Design datasets are shown as points on the map, whilst due to the huge number of trademarks being registered every year, these are shown as a chloropleth map in the background. This was a conscience decision to highlight the patents and design applications to show their location across NSW.
    </p>

    <p>Data sets used:</p>
    <ul>
      <li>Intellectual Property Government Open Data 2016</li>
      <li>SA3 Region Innovation Data 2009-15</li>
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
      <li>Intellectual Property Government Open Data 2016</li>
    </ul>
  </div>
)




