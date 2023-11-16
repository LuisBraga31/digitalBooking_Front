/* eslint-disable react/prop-types */
import { useState } from 'react';
import produtos from '../../data/elements.json';
import styles from './Mecanismo.module.css';

import { useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

export default function MecanismoBusca( {setFilterLocation} ) {

  const { tema } = useContext(TemaContext);

  const [selectedValue, setSelectedValue] = useState('');
  const listaCidades = Array.from(new Set(produtos.map(item => item.location)));

  const selectChange = (event) => {
    setSelectedValue(event.target.value); 
  };

  const handleSearchForm = (e) => {
    e.preventDefault();
    setFilterLocation(selectedValue);
  }

  return (
    <div className={`${styles.mecanismo} ${tema ? '' : styles.darkMode}`}>
        <h1> Buscar ofertas em hotéis, casas e muito mais </h1>
        
        <form className={styles.formBusca} onSubmit={handleSearchForm}>
            <select value={selectedValue} onChange={selectChange} className={styles.buscaSelect} type="text">
              <option value="" disabled hidden> Onde Vamos ?</option>
              <option value="All"> Ver todas opções </option>
              {listaCidades.map(item => (
                <option key={item} value={item}> {item} </option>
              ))}

            </select>
            <input className={styles.buscaInput} type="text" placeholder="Check in - Check out"/>
            <button className={styles.buscaButton} type="submit"> Buscar </button>
        </form>
    
    </div>
  )
}