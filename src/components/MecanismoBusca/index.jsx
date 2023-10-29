import { useState } from 'react';
import styles from './Mecanismo.module.css';

export default function MecanismoBusca() {

  const [selectedValue, setSelectedValue] = useState('')

  const selectChange = (event) => {
    setSelectedValue(event.target.value); 
  };

  return (
    <div className={styles.mecanismo}>
        <h1> Buscar ofertas em hotéis, casas e muito mais </h1>
        
        <form className={styles.formBusca}>
            <select value={selectedValue} onChange={selectChange} className={styles.buscaSelect} type="text">
              <option value="" disabled hidden> Onde Vamos ?</option>
              <option value="opcao1"> Rio de Janeiro - Brasil </option>
              <option value="opcao2"> Porto de Galinhas - Brasil </option>
              <option value="opcao3"> Santos - Brasil </option>
            </select>
            <input className={styles.buscaInput} type="text" placeholder="Check in - Check out"/>
            <button className={styles.buscaButton} type="submit"> Buscar </button>
        </form>
    
    </div>
  )
}