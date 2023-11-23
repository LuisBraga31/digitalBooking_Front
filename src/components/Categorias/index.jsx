import { useContext, useState } from 'react';
import { TemaContext } from "../../contexts/globalContext";

import styles from './Categorias.module.css';

export default function Categorias( {setFilterCategory, categorias}) {

    const { tema } = useContext(TemaContext);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    
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
        
        <h2> Selecione uma categoria </h2>
        
        <div className={styles.blocos}>
            {categorias
            .map(item => (
                <div key={item.id} className={`${styles.categoriaItem} ${categoriaSelecionada === `${item.id}` && styles.selected}`} onClick={() => handleCategoriaClick(`${item.id}`)}> 
                    <img src={item.urlImage} alt="" />
                    <div className={styles.categoriaItemDesc}>
                        <h4> {item.nome} </h4>
                        <p> {item.descricao} </p>
                    </div>
                </div>
            ))}

        </div>
    
        <button className={styles.verTudoButton} onClick={verTudo}> Exibir todas </button>

    </div>
  )
}
