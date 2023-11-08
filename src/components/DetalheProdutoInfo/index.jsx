import styles from './DetalheProdutoInfo.module.css'

export function DetalheProdutoInfo() {
    return(
        <div className={styles.containerInfo}>
            <h1 className={styles.tituloInfo}>O que você precisa saber:</h1>
            
            <div className={styles.blocoInfo}>
                <h3 className={styles.subtituloInfo}>Regras da casa</h3>

                <div className={styles.info}>Check-out: 10:00</div>

                <div className={styles.info}>Não é permitido festas</div>

                <div className={styles.info}>Não fumar</div>
            </div>

            <div className={styles.bloco}>
                <h3 className={styles.subtitulo}>Saúde e segurança</h3>

                <div className={styles.info}>Check-out: 10:00</div>

                <div className={styles.info}>Não é permitido festas</div>

                <div className={styles.info}>Não fumar</div>
            </div>

            <div className={styles.bloco}>
                <h3 className={styles.subtitulo}>Política de cancelamento</h3>

                <div className={styles.info}>Check-out: 10:00</div>

                <div className={styles.info}>Não é permitido festas</div>

                <div className={styles.info}>Não fumar</div>
            </div>

        </div>
    )
}