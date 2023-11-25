import { useState, useContext } from 'react';

import styles from './ReservaForm.module.css';
import { IoIosStar } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import map from '../../assets/icons/map.png';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TemaContext } from '../../contexts/globalContext';

export function ReservaFormulario( {nome, tipoCategoria, tipoCidade, imagens}) {

    const { tema } = useContext(TemaContext);

    const [selectedHour, setSelectedHour] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const estaLogado = !!localStorage.getItem("usuarioLogado");
    const usuarioData = estaLogado ? JSON.parse(localStorage.getItem("usuarioLogado")) : {'nome': '', 'sobrenome': '', 'email': ''};

    const qtdEstrelas = new Array(5).fill(null);
    const [ horariosArray ] = useState(Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`));

    const selectHour = (event) => {
        setSelectedHour(event.target.value); 
      };

    const handleDateChange = (date) => {
        setCheckIn(date[0]);
        setCheckOut(date[1]);
    };

    const handleReservaForm = (e) => {
        e.preventDefault();
        if (!checkIn && !checkOut) {
            alert('Selecione um intervalo de datas válido.');
            return;
          }

      }

    const desabilitarDatas = ({ date }) => {
        const dataAtual = new Date();
        const dataAnterior = date < dataAtual;
        return dataAnterior;
    }

    return (
        <form className={`${styles.reservaForm} ${tema ? '' : styles.darkMode}`} onSubmit={handleReservaForm}>

            <div className={`${styles.reservaFormLeft} ${tema ? '' : styles.darkMode}`}>
                <h1 className={styles.titleReserva}>Complete seus dados</h1>
                
                <div className={styles.input}>
                    
                    <div className={styles.inputItem}>
                        <label htmlFor="" >Nome</label>
                        <input type="text" placeholder={usuarioData.nome} disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label htmlFor="">Sobrenome</label>
                        <input type="text" placeholder={usuarioData.sobrenome} disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder={usuarioData.email} disabled/>
                    </div>

                    <div className={styles.inputItem}>
                        <label htmlFor="">Cidade</label>
                        <input type="text" className={styles.inputCidade} placeholder='Cidade' required/>
                    </div>

                </div>

                <div className={styles.calendarioForm}>
                    <h1 className={styles.calendarioFormTitle}> Selecione sua data de reserva </h1>
                    <Calendar
                        className={styles.calendarForm}
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
                        
                        <label htmlFor="hourOptions" className={styles.horaFormLabel}> Indique a sua hora prevista de chegada </label>
                        
                        <select id="hourOptions" value={selectedHour} onChange={selectHour} type="text" className={styles.horaFormSelect} required> 
                            <option value="" disabled hidden> Selecione a sua hora de chegada </option>
                            {horariosArray.map((horario, index) => (
                                <option key={index} value={horario}>
                                    {horario}
                                </option>
                            ))}
                        </select>
                         
                    </div>
                </div>

            </div>

            <div className={`${styles.reservaFormRight} ${tema ? '' : styles.darkMode}`} >
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
                        <span>
                            {checkIn ? checkIn.getDate() : '__'} / {checkIn ? checkIn.getMonth() : '__'} / {checkIn ? checkIn.getFullYear() : '__'}
                        </span>   
                    </div>

                    <div className={styles.check}>
                        <p>Check out</p>
                        <span>
                            {checkOut ? checkOut.getDate() : '__'} / {checkOut ? checkOut.getMonth() : '__'} / {checkOut ? checkOut.getFullYear() : '__'}
                        </span>   
                    </div>
            
                    <button className={styles.botaoReserva}>Confirmar Reserva</button>
                </div>
            </div>

        </form>
    )
}