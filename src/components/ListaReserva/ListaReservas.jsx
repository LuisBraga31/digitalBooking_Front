import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from './ListaReserva.module.css'

import { useContext, useEffect, useState } from 'react';
import { TemaContext } from '../../contexts/globalContext';

import map from '../../assets/icons/map.png';
import ListaReservaCard from '../ListaReservaCard/ListaReservaCard';

export default function ListaReservas() {
    
    const { tema } = useContext(TemaContext); 

    const produtoId = useParams();

    return (
        <div className={styles.minhasReservas}>
            <div className={`${styles.headerListaReservas} ${tema ? '' : styles.darkModeHeader}`}>
                <div className={styles.headerListaReservasTitle}>
                    <span> Minhas Reservas </span>
                </div>

                <Link to='/' className={styles.headerListaReservasButton}> 
                    <AiOutlineArrowLeft size={32}/> 
                </Link>
            </div>

            <div className={`${styles.reservasList} ${tema ? '' : styles.darkMode}`}>
            
                <ListaReservaCard/>

            </div>

            
            
            

        </div> 

    )


}