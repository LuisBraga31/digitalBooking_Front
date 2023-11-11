/* eslint-disable react/prop-types */
import styles from './DetalheProdutoLocalizacao.module.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function DetalheProdutoLocalizacao( {produto} ) {
    return (
      <div className={styles.localContainer}>
        
        <h1 className={styles.localTitle}> Onde você vai estar? </h1>

        <p className={styles.localInfo}> {produto.location} </p>

        <div className={styles.localMap}>
          
          <MapContainer className={styles.map} center={[-22.9031, -43.255]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-22.9031, -43.255]}>
              <Popup> {produto.title} </Popup>
            </Marker>
          </MapContainer>

        </div>

      </div>
    );
}