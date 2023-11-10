import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from './DetalheProdutoCalendario.module.css';
import './calendario.css';

export function DetalheProdutoCalendario() {
    
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
      <div className={styles.containerCalendario}>
        <h1 className={styles.dataTitle}> Datas Disponíveis</h1>

        <div className={styles.sectionReserva}>
          <div className={styles.calendario}>
            <Calendar
              className={styles.calendarOrigin}
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