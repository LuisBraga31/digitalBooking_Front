import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from './ListaReserva.module.css'
import reservas from '../../data/reservas.json';

import { useContext, useEffect, useState } from 'react';
import { TemaContext } from '../../contexts/globalContext';

import map from '../../assets/icons/map.png';

export default function ListaReservas() {
    
    const { tema } = useContext(TemaContext); 

    const produtoId = useParams();
    // const [produto, setProduto] = useState([]);

    // const getProduto = () => {
    //     const produtoEncontrado = reservas.find(item => item.id === parseInt(produtoId.id));
    //     setProduto(produtoEncontrado);
    // }

    // useEffect(() => {
    //     getProduto();
    // }, []);

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
                
                <div className={styles.reservaProduto}>
                    
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

                <div className={styles.reservaInfos}>
                    <h2> Detalhes da Reserva </h2>
                    <div className={styles.reservaInfosDetail}>
                        <span> Check In: 26-11-2023 </span>
                        <span> Check Out: 05-12-2023 </span>
                        <span> Hora de Chegada: 14:00 </span>
                    </div>
                    <strong> Status: Pendente </strong>
                </div>

            </div>
            

        </div> 

    )


}