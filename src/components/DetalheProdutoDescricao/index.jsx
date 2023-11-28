import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

import styles from './DetalheProdutoDescricao.module.css';

export function DetalheProdutoDescricao({ nome, descricao, caracteristicas }) {

    const { tema } = useContext(TemaContext);
   
    return (
        <div className={`${styles.descricaoContainer} ${tema ? '' : styles.darkMode}`}>
            
            <h1 className={styles.descricaoTitle}>
                {nome}
            </h1>

            <p className={styles.descricaoText}>
                {descricao}
            </p>

            <h2 className={styles.ofertasTitle}>O que esse lugar oferece?</h2>
            
            <div className={styles.ofertasGrid}>
                {caracteristicas.map(item => (
                    <div key={item.id} className={styles.ofertaItem}>
                        <img src={item.icone} alt="" />
                        <p> {item.nome} </p>
                     </div>
                ))}
            </div>

        </div>
    )
}