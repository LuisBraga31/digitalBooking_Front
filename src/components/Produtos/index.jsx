/* eslint-disable react/prop-types */
import styles from './Produtos.module.css';

import produtos from '../../data/elements.json';
import ProdutoCard from '../ProdutoCard';

import { useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

export default function Produtos( { filterCategory } ) {

  const { tema } = useContext(TemaContext);
  
  return (
    <div className={`${styles.produtos} ${tema ? '' : styles.darkMode}`}>
        
        <h2> Recomendações </h2>
        
        <div className={styles.blocoProdutos}>
        {produtos
        .filter((item) => filterCategory === "All" ? true : filterCategory === item.category ? true : false)
        .map(item => (
            <ProdutoCard key={item.id} {... item }/>
        ))}
        </div>
        
    </div>
  )
}