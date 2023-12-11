import { useContext, useEffect, useState } from 'react';

import styles from './ListaReservaCard.module.css'
import map from '../../assets/icons/map.png';
import { TemaContext } from '../../contexts/globalContext';

export default function ListaReservaCard() {
    
    const { tema } = useContext(TemaContext); 

    return (
           
            <>
                
                <div className={`${styles.reservaNumber} ${tema ? '' : styles.darkMode}`}>
                    <span> 01 </span>
                </div>

                <div className={`${styles.reservaProduto} ${tema ? '' : styles.darkMode}`}>
                    
                    <div className={styles.reservaProdutoImg}>
                        <img src="/produtos/carregando.gif" alt="" />
                    </div>
                    
                    <div className={styles.reservaProdutoInfos}>
                        <span> HOTEL </span>
                        <h3> Hermitage Hotel </h3>
                        <div className={styles.reservaProdutoLocal}>
                            <img src={map} alt="" />
                            <span> Rio de Janeiro-RJ, Brasil </span>
                        </div>
                    </div>

                </div>

                <div className={`${styles.reservaInfos} ${tema ? '' : styles.darkMode}`}>
                    <h2> Detalhes da Reserva </h2>
                    <div className={styles.reservaInfosDetail}>
                        <span> Check In: 26-11-2023 </span>
                        <span> Check Out: 05-12-2023 </span>
                        <span> Hora de Chegada: 14:00 </span>
                    </div>
                    <strong> Status: Pendente </strong>
                </div>


            </>

    )


}