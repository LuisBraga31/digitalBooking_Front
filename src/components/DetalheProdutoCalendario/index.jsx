import { useState, useContext } from "react";
import Calendar from "react-calendar";

import { TemaContext } from "../../contexts/globalContext";

import styles from './DetalheProdutoCalendario.module.css';
import "react-calendar/dist/Calendar.css";
import './calendario.css';

export function DetalheProdutoCalendario() {

    const { tema } = useContext(TemaContext);
    const [activeStartDate, setActiveStartDate] = useState(new Date(2023, 10, 9));

    const handleDateChange = (date) => {
      setActiveStartDate(date);
    };
    
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
              value={activeStartDate}
              onChange={handleDateChange}
              showDoubleView
              tileDisabled={desabilitarDatas}
              showNavigation={true}
            />
            <Calendar
              className={styles.calendarMobile}
              value={activeStartDate}
              onChange={handleDateChange}
              tileDisabled={desabilitarDatas}
              showNavigation={true}
            />
          </div>

          <div className={styles.reserva}>
            <p>Adicione as datas da sia viagem para obter preços exatos.</p>
            <button>Iniciar reserva</button>
          </div>
          
        </div>
      </div>
    );
}