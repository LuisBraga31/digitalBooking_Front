import { useState } from 'react';

import styles from './ReservaForm.module.css';
import { FaRegCheckCircle } from "react-icons/fa";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function ReservaFormulario() {

    const [activeStartDate, setActiveStartDate] = useState(new Date(2023, 10, 23));

    const handleDateChange = (date) => {
        setActiveStartDate(date);
    };

    const desabilitarDatas = ({ date }) => {
        const dataAtual = new Date();
        const dataAnterior = date < dataAtual;
        return dataAnterior;
    }

    return (
        <form className={styles.reservaForm}>

            <div className={styles.reservaFormLeft}>
                <h1 className={styles.titleReserva}>Complete seus dados</h1>
                
                <div className={styles.input}>
                    
                    <div className={styles.inputItem}>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Deborah' disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label htmlFor="">Sobrenome</label>
                        <input type="text" placeholder='Borges' disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder='deborah@gmail.com' disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label htmlFor="">Cidade</label>
                        <input type="text" />
                    </div>

                </div>

                <div className={styles.calendarioForm}>
                    <h1 className={styles.calendarioFormTitle}> Selecione sua data de reserva </h1>
                    <Calendar
                        className={styles.calendarDesktop}
                        value={activeStartDate}
                        onChange={handleDateChange}
                        showDoubleView
                        tileDisabled={desabilitarDatas}
                        showNavigation={true}
                    />
                </div>


                <div className={styles.horaChegadaForm}>
                    <h1 className={styles.horaFormTitle}> Seu horário de chegada </h1>
                    
                    <div className={styles.horaFormBody}>
                        
                        <div className={styles.horaFormCheckText}> 
                            <FaRegCheckCircle /> 
                            <p> Seu quarto estará pronto para check-in entre 10h00 e 23h00</p> 
                        </div>
                        
                        <label className={styles.horaFormLabel}> Indique a sua hora prevista de chegada </label>
                        
                        <select name="" id="" className={styles.horaFormSelect}> 
                            <option value="" disabled hidden selected> Selecione a sua hora de chegada </option>
                        </select>
                         
                    </div>
                </div>

            </div>

            <div className={styles.reservaFormRight}>
                <div></div>
            </div>

        </form>
    )
}