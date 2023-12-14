import { useState, useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";
import { Modal } from '../Modal';

import styles from './Mecanismo.module.css';
import './calendarModal.css';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { SiGooglemaps } from "react-icons/si";

export default function MecanismoBusca( { setFilterLocation, listaCidades } ) {

  const { tema } = useContext(TemaContext);

  const [openModal, setOpenModal] = useState(false);
  const [dataInicio, setDataInicio] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [meses, setMeses] = useState([]);
  
  const [selectedValue, setSelectedValue] = useState('All');

  const desabilitarDatas = ({ date }) => {
    const dataAtual = new Date();
    const dataAnterior = date < dataAtual;
    return dataAnterior;
  }

  const handleDateChange = (date) => {
      const meses = [];
      const converteMes = { month: 'long' };
      const mesInicio = date[0].toLocaleString('pt-BR', converteMes);
      const mesFinal = date[1].toLocaleString('pt-BR', converteMes);
      meses.push(mesInicio);
      meses.push(mesFinal);
      
      setMeses(meses);
      setDataInicio(date[0]);
      setDataFinal(date[1]);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value); 
  };

  const handleSearchForm = (e) => {
    e.preventDefault();
    setFilterLocation(selectedValue);
  }

  return (
    <div className={`${styles.mecanismo} ${tema ? '' : styles.darkMode}`}>
        <h1> <SiGooglemaps /> Veja hotéis, apartamentos e muito mais em nosso site </h1>
        
        <form className={styles.formBusca} onSubmit={handleSearchForm}>
            
            <select value={selectedValue} onChange={handleSelectChange} className={styles.buscaSelect} type="text">
              <option value="All" disabled hidden> Onde Vamos ?</option>
              <option value="All"> Ver todas opções </option>
              {listaCidades.map(item => (
                <option key={item.id} value={item.id}> {item.nome} </option>
              ))}
            </select>

            <span className={styles.buscaDatas} onClick={() => setOpenModal(true)}>
              {dataInicio ? `${dataInicio.getDate()} de ${meses[0].slice(0, 3)}. ~ ${dataFinal.getDate()} de ${meses[1].slice(0, 3)}.` : 'Check in - Check out'}
            </span>

            <button className={styles.buscaButton} type="submit"> Buscar </button>

        </form>

        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <div className={styles.calendarioForm}>
            <span className={styles.modalCalendarTitle}> Selecione sua data de reserva </span>
              <Calendar
                className={styles.calendarModalMobile}
                onChange={handleDateChange}
                tileDisabled={desabilitarDatas}
                showNavigation={true}
                selectRange={true}
              />
          </div>
        </Modal>
    
    </div>
  )
}