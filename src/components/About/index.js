import React, { Component } from 'react'
import styles from './index.css'
import Modal from 'react-modal'
import { InfoIcon, CloseIcon } from '../Icons'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 4
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '5em',
    width: '70vw',
    backgroundColor: '#eee'
  }
}

export default class About extends Component {
  static defaultProps = {
    modalIsOpen: false,
    toggle: () => console.log('toggling the modal')
  }
  render() {
    let { modalIsOpen, toggle } = this.props
    return (
      <div className={styles.container} onClick={toggle}>
        <InfoIcon fill="#2196F3" height="100%" />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggle}
          style={customStyles}
        >
          <div className={styles.modalContent}>
            <div className={styles.closeIcon} onClick={toggle}>
              <CloseIcon fill="#000" height="100%" />
            </div>

            <p className={styles.title}>
              Mapping Innovation
            </p>

            <p>
              <i>
                "The printing press, the pencil, the flush toilet, the battery--these are all great ideas. But where do they come from? What kind of environment breeds them? What sparks the flash of brilliance? How do we generate the breakthrough technologies that push forward our lives, our society, our culture?"
              </i>
            </p>
            <p style={{textAlign: 'right', marginRight: '2em'}}>- Steve Johnson, Where Good Ideas Come From</p>

            <p>
              Innovation is a key measure of a countries success and one that is of key importance to Australia in our current climate. In 2015, Australia was ranked number 17 in the Global Innovation Index with a score of 55.2 for 2015. Australia has maintained its 17th position from the Index in 2014 and increased two ranks from 2013 where Australia was ranked 19.
            </p>

            <p>
              This project allows the user to journey through the innovation datasets available to Govhack and explore the trademarks, patents and design applications that have been submitted.
            </p>

            <p>
              This tool will take you on a journey from the national level, where we explore the country and the innovation hubs as they have emerged through time, and then stepping into the state level datasets and exploring the spatial positioning of these innovations over time Finally, we step down further into an individual scale where we have developed Australian word cloud mapping that highlights the key innovations as they occurred throughout each decade.
            </p>
          </div>
        </Modal>
      </div>
    )
  }
}