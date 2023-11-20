/* eslint-disable react/prop-types */
import styles from './Categorias.module.css';

import categoriasData from '../../data/categorias.json';

import { useContext, useState } from 'react';
import { TemaContext } from "../../contexts/globalContext";

export default function Categorias( { setFilterCategory, categorias}) {

    const { tema } = useContext(TemaContext);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    
    const handleCategoriaClick = (categoria) => {
        setCategoriaSelecionada(categoria);
        setFilterCategory(categoria);
    };

    const verTudo = () => {
        setCategoriaSelecionada(null);
        setFilterCategory("All");
    }

  return (
    <div className={`${styles.categorias } ${tema ? '' : styles.darkMode}`}>
        
        <h2> Buscar por tipo de acomodação </h2>
        
        <div className={styles.blocos}>
            
            {categorias
            .map(item => (
                <div key={item.id} className={`${styles.categoriaItem} ${categoriaSelecionada === `${item.nome}` && styles.selected}`} onClick={() => handleCategoriaClick(`${item.nome}`)}> 
                    <img src={item.urlImage} alt="" />
                    <div className={styles.categoriaItemDesc}>
                        <h4> {item.nome} </h4>
                        <p> 807.105 hotéis </p>
                    </div>
                </div>
            ))}
            
            {/* {categoriasData
            .map(item => (
                <div key={item.id} className={`${styles.categoriaItem} ${categoriaSelecionada === `${item.nome}` && styles.selected}`} onClick={() => handleCategoriaClick(`${item.nome}`)}> 
                    <img src={item.urlImage} alt="" />
                    <div className={styles.categoriaItemDesc}>
                        <h4> {item.nome} </h4>
                        <p> 807.105 hotéis </p>
                    </div>
                </div>
            ))} */}

        </div>
    
        <button className={styles.verTudoButton} onClick={verTudo}> Ver Tudo </button>

    </div>
  )
}
