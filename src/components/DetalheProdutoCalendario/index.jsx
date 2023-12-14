import { useState, useContext, useEffect } from "react";
import { TemaContext } from "../../contexts/globalContext";
import { Link, useParams } from "react-router-dom";
import './calendario.css';
import styles from './DetalheProdutoCalendario.module.css';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function DetalheProdutoCalendario( {reservas} ) {
  
    const { tema } = useContext(TemaContext);
    const produtoId = useParams();
    const [datasindisponiveis, setDatasIndisponiveis] = useState([]);

    const getDiasEntreDatas = (dataInicial, dataFinal) => {
      const datas = [];
    
      const dataAtual = new Date(dataInicial);
      const dataFim = new Date(dataFinal);

      dataAtual.setDate(dataAtual.getDate() + 1);
      dataFim.setDate(dataFim.getDate() + 1);

      while (dataAtual <= dataFim ) {
        if (!datas.includes(dataAtual.toDateString())) {
          datas.push(dataAtual.toDateString());
        }
        dataAtual.setDate(dataAtual.getDate() + 1);
      }
    
      return datas;
    };
    
    const desabilitarDatas = ({ date }) => {
      const dataAtual = new Date();
      const dataAnterior = date < dataAtual;
      const dataEspecifica = datasindisponiveis.some(dataEspecifica => dataEspecifica === date.toDateString());
      return dataAnterior || dataEspecifica;
    };

    useEffect(() => {
      const datasReservas = [];
      for(let i = 0; i < reservas.length; i++) {
        const testes = getDiasEntreDatas(reservas[i].dataInicio, reservas[i].dataFinal);
        datasReservas.push(testes)
      }
      setDatasIndisponiveis(datasReservas.flat(1))
    }, [reservas]);
    
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