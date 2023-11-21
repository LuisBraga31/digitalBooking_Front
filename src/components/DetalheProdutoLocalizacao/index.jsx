import { useEffect, useState, useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

import styles from './DetalheProdutoLocalizacao.module.css';

import locationIcon from '../../assets/icons/locationIcon.png';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function DetalheProdutoLocalizacao( {nome, latitude, longitude} ) {

    const { tema } = useContext(TemaContext);

    const [lat, setLat] = useState(latitude);
    const [long, setLong] = useState(longitude);

    useEffect (() => {
      setLat(latitude)
      setLong(longitude)
    }, [latitude, longitude]);

    const customIcon = L.icon({
      iconUrl: locationIcon,
      iconSize: [25, 41], 
      iconAnchor: [12, 41], 
    });

    return (
      <div className={`${styles.localContainer} ${tema ? '' : styles.darkMode}`}>
        
        <h1 className={styles.localTitle}> Onde você vai estar? </h1>

        <p className={styles.localInfo}> ... - Brasil </p>

        <div className={styles.localMap}>
          
          {
            lat ? (
              <MapContainer className={styles.map} center={lat ? [lat, long] : [0,0] } zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[lat, long]} icon={customIcon}>
                <Popup> <h3 style={{ color: 'darkblue' }}>{nome}</h3></Popup>
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