import { useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

import styles from './Produtos.module.css';

import ProdutoCard from '../ProdutoCard';

export default function Produtos( { filterCategory, filterLocation, produtos } ) {

  const { tema } = useContext(TemaContext);

  return (
    <div className={`${styles.produtos} ${tema ? '' : styles.darkMode}`}>
        
        <h2> Acomodações </h2>
        
        <div className={styles.blocoProdutos}>
          {produtos
          .filter((item) => filterLocation === "All" ? true : filterLocation == item.cidadesId ? true : false)
          .filter((item) => filterCategory === "All" ? true : filterCategory == item.categoriasId ? true : false)
          .map(item => (
              <ProdutoCard key={item.id} {... item }/>
          ))}
        </div>
        
    </div>
  )
}