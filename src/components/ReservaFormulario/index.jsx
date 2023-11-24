import { useState } from 'react';

import styles from './ReservaForm.module.css';
import { IoIosStar } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import map from '../../assets/icons/map.png';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function ReservaFormulario( {nome, tipoCategoria, tipoCidade, imagens}) {

    const [activeStartDate, setActiveStartDate] = useState(new Date(2023, 10, 23));
    const qtdEstrelas = new Array(5).fill(null);

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
                        <label htmlFor="" >Nome</label>
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
                        <input type="text" className={styles.inputCidade} placeholder='Cidade'/>
                    </div>

                </div>

                <div className={styles.calendarioForm}>
                    <h1 className={styles.calendarioFormTitle}> Selecione sua data de reserva </h1>
                    <Calendar
                        className={styles.calendarForm}
                        value={activeStartDate}
                        onChange={handleDateChange}
                        showDoubleView
                        tileDisabled={desabilitarDatas}
                        showNavigation={true}
                        selectRange={true}
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
                            <option value=""> 12 horas </option>
                            <option value=""> 15 horas </option>
                        </select>
                         
                    </div>
                </div>

            </div>

            <div className={styles.reservaFormRight}>
                <div className={styles.reservaInfos}>
                    <h1 className={styles.reservaTitle}> Detalhe da Reserva </h1>
                    {imagens[0] && <img src={imagens[0].url} className={styles.imageReserva} alt="" />}
                    <div className={styles.reservaHeaderInfo}>
                        <span> {tipoCategoria.nome.toUpperCase()} </span>
                        <h3> {nome} </h3>
                        <div> {qtdEstrelas.map((_, index) => ( <IoIosStar key={index} className={styles.star} size={14}/>  ))}  </div>
                        <div className={styles.reservaLocation}>
                            <img src={map} alt=""/>
                            <p className={styles.localizacao}> {tipoCidade.nome} - {tipoCidade.pais}</p>
                        </div>
                    </div>

                    <div className={`${styles.check} ${styles.checkTop}`}>
                        <p>Check in</p>
                        <span>__/__/__</span>   
                    </div>

                    <div className={styles.check}>
                        <p>Check out</p>
                        <span>__/__/__</span>   
                    </div>
            
                    <button className={styles.botaoReserva}>Confirmar Reserva</button>
                </div>
            </div>

        </form>
    )
}