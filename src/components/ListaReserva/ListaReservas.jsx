import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from './ListaReserva.module.css'

import { useContext, useEffect, useState } from 'react';
import { TemaContext } from '../../contexts/globalContext';

import ListaReservaCard from '../ListaReservaCard/ListaReservaCard';
import { api } from '../../services/api';

export default function ListaReservas() {
    
    const { tema } = useContext(TemaContext); 
    const [reservas, setReservas] = useState([]);

    const usuarioId = useParams();
    const estaLogado = !!localStorage.getItem("token");
    const token = estaLogado ? localStorage.getItem("token") : null;

    // const getReservas = async() => {
    //     const res = await api.get(`/v1/reservas/porusuario/${usuarioId.id}`, 
    //         {
    //           headers: {
    //             'Content-Type' : 'application/json',
    //             'Authorization': `Bearer ${token}`,
    //           },
    //         });
    //     setReservas(res.data.reservas);
    // }

    // useEffect( () => {
    //     getReservas();
    // }, [])

    return (
        <div className={`${styles.minhasReservas} ${tema ? '' : styles.darkMode}`}>
            
            <div className={`${styles.headerListaReservas} ${tema ? '' : styles.darkModeHeader}`}>
                <div className={styles.headerListaReservasTitle}>
                    <span> Minhas Reservas </span>
                </div>

                <Link to='/' className={styles.headerListaReservasButton}> 
                    <AiOutlineArrowLeft size={32}/> 
                </Link>
            </div>

            {reservas.map((item, index)=> (
                    <ListaReservaCard key={item.id} {... item} position={index}/>
            ))}

            {reservas.map((item, index)=> (
                <ListaReservaCard key={item.id} {... item} position={index}/>
            )).length === 0 && <p className={styles.avisoReservas}> Você não possui reservas no momento! </p>}      

        </div> 

    )


}