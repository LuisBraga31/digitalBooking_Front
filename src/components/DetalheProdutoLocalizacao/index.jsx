/* eslint-disable react/prop-types */
import styles from './DetalheProdutoLocalizacao.module.css' 

export function DetalheProdutoLocalizacao({produto}) {    

    return(
        <div className={styles.container}>

            <div>
                <p className={styles.localizacao}>
                    {produto.location}
                </p>
            </div>

            <div>
                <p className={styles.classificacao}>Muito bom <strong>8</strong></p>
            </div>

        </div>
    )
}