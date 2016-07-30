import React, { Component } from 'react'
import styles from './index.css'
import Modal from 'react-modal'
import { InfoIcon, CloseIcon } from '../Icons'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 4
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '50vh',
    width: '50vw'
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
          <div>
            <div className={styles.closeIcon} onClick={toggle}>
              <CloseIcon fill="#000" height="100%" />
            </div>
            <a href="https://www.youtube.com/watch?v=xJo1WVTjaB0" target="_blank">You sunk my battleship</a>
            <p>Real content tbd</p>
          </div>
        </Modal>
      </div>
    )
  }
}