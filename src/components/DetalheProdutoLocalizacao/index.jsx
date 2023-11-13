/* eslint-disable react/prop-types */
import styles from './DetalheProdutoLocalizacao.module.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

export function DetalheProdutoLocalizacao( {produto} ) {

    const [lat, setLat] = useState(produto.lat);
    const [long, setLong] = useState(produto.long);

    useEffect (() => {
      setLat(produto.lat)
      setLong(produto.long)
    }, [produto]);

    return (
      <div className={styles.localContainer}>
        
        <h1 className={styles.localTitle}> Onde você vai estar? </h1>

        <p className={styles.localInfo}> {produto.location} </p>

        <div className={styles.localMap}>
          
          {
            lat ? (
              <MapContainer className={styles.map} center={lat ? [lat, long] : [0,0] } zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[lat, long]}>
                <Popup> {produto.title} </Popup>
              </Marker>
            </MapContainer>
            ) : (
              <> </>
            )
          }


        </div>

      </div>
    );
}