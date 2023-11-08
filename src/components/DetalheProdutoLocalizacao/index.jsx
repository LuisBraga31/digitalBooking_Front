import styles from './DetalheProdutoLocalizacao.module.css';

export function DetalheProdutoLocalizacao( {produto}) {
    return(
        
        <div className={styles.local}>
            <h1> Onde você vai estar? </h1>

            <p> {produto.location} </p>

            <div>
                
            </div>
        
        </div>
    )
}