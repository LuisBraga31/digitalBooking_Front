import styles from './DetalheProdutoInfo.module.css'

export function DetalheProdutoInfo() {
    
    return(
        <div className={styles.containerInfo}>
            
            <h2 className={styles.tituloInfo}>O que você precisa saber:</h2>
            
            <div className={styles.bloco}>
                
                <div className={styles.blocoInfo}>
                    <h3 className={styles.subtituloInfo}>Regras da casa</h3>
                    <p>Check-out: 10:00</p>
                    <p>Não é permitido festas</p>
                    <p>Não fumar</p>
                </div>

                <div className={styles.blocoInfo}>
                    <h3 className={styles.subtitulo}>Saúde e segurança</h3>
                    <p>Diretrizes de distanciamento social e outras regulamentações relacionadas ao coronavírus se aplicam</p>
                    <p>Detector de fumaça</p>
                    <p>Depósito de segurança</p>
                </div>

                <div className={styles.blocoInfo}>
                    <h3 className={styles.subtitulo}>Política de cancelamento</h3>
                    <p>Adicione as datas da viagem para obter detalhes de cancelamento para esta estadia.</p>
                </div>

            </div>

        </div>
    )
}