import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from './ListaReserva.module.css'
import { useContext } from 'react';
import { TemaContext } from '../../contexts/globalContext';

import map from '../../assets/icons/map.png';

export default function ListaReservas() {
    
    const { tema } = useContext(TemaContext); 

    return (
        <>
            <div className={`${styles.headerListaReservas} ${tema ? '' : styles.darkModeHeader}`}>
                <div className={styles.headerListaReservasTitle}>
                    <span> Minhas Reservas </span>
                </div>

                <Link to='/' className={styles.headerListaReservasButton}> 
                    <AiOutlineArrowLeft size={32}/> 
                </Link>
            </div>

            <div className={styles.reservasList}>
                
                <div className={styles.reservaProduto}>
                    
                    <div className={styles.reservaProdutoImg}>
                        <img src="/produtos/carregando.gif" alt="" />
                    </div>
                    
                    <div className={styles.reservaProdutoInfos}>
                        <span> Hotel </span>
                        <h3> Hermitage Hotel </h3>
                        <div>
                            <img src={map} alt="" />
                            <span> Rio de Janeiro-RJ, Brasil </span>
                        </div>
                    </div>

                </div>

                <div className={styles.reservaInfos}>
                    <h2> Detalhes da Reserva </h2>
                    <div>
                        <span> Check In: 26-11-2023 </span>
                        <span> Check Out: 05-12-2023 </span>
                        <span> Hora de Chegada: 14:00 </span>
                    </div>
                    <span> Status: Pendente </span>
                </div>

            </div>
            

        </> 

    )


}