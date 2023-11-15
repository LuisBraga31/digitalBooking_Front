/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import locationIcon from '../../assets/icons/locationIcon.png';
import styles from './DetalheProdutoLocalizacao.module.css';

import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function DetalheProdutoLocalizacao( {produto} ) {

    const { tema } = useContext(TemaContext);

    const [lat, setLat] = useState(produto.lat);
    const [long, setLong] = useState(produto.long);

    useEffect (() => {
      setLat(produto.lat)
      setLong(produto.long)
    }, [produto]);

    const customIcon = L.icon({
      iconUrl: locationIcon,
      iconSize: [25, 41], 
      iconAnchor: [12, 41], 
    });

    return (
      <div className={`${styles.localContainer} ${tema ? '' : styles.darkMode}`}>
        
        <h1 className={styles.localTitle}> Onde você vai estar? </h1>

        <p className={styles.localInfo}> {produto.location} </p>

        <div className={styles.localMap}>
          
          {
            lat ? (
              <MapContainer className={styles.map} center={lat ? [lat, long] : [0,0] } zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[lat, long]} icon={customIcon}>
                <Popup> <h3 style={{ color: 'darkblue' }}>{produto.title}</h3></Popup>
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