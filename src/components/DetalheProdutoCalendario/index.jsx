import { useState, useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";
import { Link, useParams } from "react-router-dom";
import './calendario.css';
import styles from './DetalheProdutoCalendario.module.css';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function DetalheProdutoCalendario() {

    const { tema } = useContext(TemaContext);
    const produtoId = useParams();
    
    const desabilitarDatas = ({ date }) => {
        const dataAtual = new Date();
        const dataAnterior = date < dataAtual;
        return dataAnterior;
    }
    
    return (
      <div className={`${styles.calendarioContainer} ${tema ? '' : styles.darkMode}`}>
        <h1 className={styles.calendarioTitle}> Datas Disponíveis</h1>

        <div className={styles.calendarioSection}>
          
          <div className={styles.calendario}>
            <Calendar
              className={styles.calendarDesktop}
              showDoubleView
              tileDisabled={desabilitarDatas}
              showNavigation={true}
            />
            <Calendar
              className={styles.calendarMobile}
              tileDisabled={desabilitarDatas}
              showNavigation={true}
            />
          </div>

          <div className={styles.reserva}>
            <p>Adicione as datas da sua viagem para obter preços exatos.</p>
            <Link to={`/produto/${produtoId.id}/reserva`}>
              <button>Iniciar reserva</button>
            </Link>
          </div>
          
        </div>
      </div>
    );
}