/* eslint-disable react/prop-types */
import styles from './DetalheProdutoHeader.module.css';

export function DetalheProdutoHeader( { produto }) {    

    return(
        <div className={styles.header}>
            
            <div className={styles.headerConteudo}>
                <h4> {produto.category} </h4>
                <h2> {produto.title} </h2>
            </div>

            <button className={styles.headerButton}> {'<<<'} </button>
            
            
        </div>
    )
}