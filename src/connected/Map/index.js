import React from 'react'
import styles from './index.css'
import { connect } from 'react-redux'

import { Map, TileLayer, LayersControl, ZoomControl, ScaleControl } from 'react-leaflet'
import 'style!css!leaflet/dist/leaflet.css'

export default connect(state => ({}))(props => (
  <Map
    center={[-33.006928, 147.891230]}
    zoom={12}
    className={styles.map}
    zoomControl={false}
    attributionControl={false}
  >
    <ScaleControl position="topleft" />
    <LayersControl position='topleft'>
      <LayersControl.BaseLayer checked={true} name='Grey'>
        <TileLayer url="https://{s}.tiles.mapbox.com/v3/btsdatavisualisation.pk03pg7k/{z}/{x}/{y}.png" />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer checked={false} name='Streets'>
        <TileLayer url="https://{s}.tiles.mapbox.com/v3/btsdatavisualisation.map-s6wlfsu2/{z}/{x}/{y}.png" />
      </LayersControl.BaseLayer>
    </LayersControl>
    <ZoomControl position='topleft' />
  </Map>
))