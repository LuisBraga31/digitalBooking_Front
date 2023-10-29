import styles from './Produtos.module.css';

import produtos from '../../data/elements.json';
import ProdutoCard from '../ProdutoCard';

export default function Produtos() {
  return (
    <div className={styles.produtos}>
        
        <h2> Recomendações </h2>
        
        <div className={styles.blocoProdutos}>
        {produtos.map(item => (
            <ProdutoCard key={item.id} {... item }/>
        ))}
        </div>
        
    </div>
  )
}