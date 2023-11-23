import { useEffect, useState, useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

import styles from './Mecanismo.module.css';

import { api } from '../../services/api';

export default function MecanismoBusca( {setFilterLocation} ) {

  const { tema } = useContext(TemaContext);

  const [selectedValue, setSelectedValue] = useState('');
  const [listaCidades, setListaCidades] = useState([{'id': 1, 'nome': 'Santos-SP'}, {'id': 2, 'nome': 'São Paulo-SP'}, {'id': 3, 'nome': 'Rio de Janeiro-RJ'}]);

  const selectChange = (event) => {
    setSelectedValue(event.target.value); 
  };

  const handleSearchForm = (e) => {
    e.preventDefault();
    setFilterLocation(selectedValue);
  }

  // const getListaCidades = async() => {
  //   const res = await api.get(`/v1/cidades?termo=`);
  //   setListaCidades(res.data.cidades);
  // }

  // useEffect(() => {
  //   getListaCidades();
  // },[])

  return (
    <div className={`${styles.mecanismo} ${tema ? '' : styles.darkMode}`}>
        <h1> Veja hotéis, apartamentos e muito mais em nosso site </h1>
        
        <form className={styles.formBusca} onSubmit={handleSearchForm}>
            <select value={selectedValue} onChange={selectChange} className={styles.buscaSelect} type="text">
              <option value="" disabled hidden> Onde Vamos ?</option>
              <option value="All"> Ver todas opções </option>
              {listaCidades.map(item => (
                <option key={item.id} value={item.id}> {item.nome} </option>
              ))}

            </select>
            <input className={styles.buscaInput} type="text" placeholder="Check in - Check out"/>
            <button className={styles.buscaButton} type="submit"> Buscar </button>
        </form>
    
    </div>
  )
}