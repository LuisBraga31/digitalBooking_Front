import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

import styles from './DetalheProdutoInfo.module.css';

export function DetalheProdutoInfo() {
    
    const { tema } = useContext(TemaContext);

    return(
        <div className={`${styles.containerInfo} ${tema ? '' : styles.darkMode}`}>
            
            <h2 className={styles.tituloInfo}>O que você precisa saber:</h2>
            
            <div className={styles.bloco}>
                
                <div className={styles.blocoInfo}>
                    <h3>Regras da casa</h3>
                    <p> É proibido festas após 21hrs. </p>
                    <p> É proibido fumar na propriedade. </p>
                    <p> Informe sobre qualquer dano.</p>
                    <p> Respeite os vizinhos </p>
                </div>

                <div className={styles.blocoInfo}>
                    <h3>Saúde e segurança</h3>
                    <p>Diretrizes de distanciamento social relacionadas ao coronavírus se aplicam.</p>
                    <p>Detector de fumaça disponível em todas as áreas.</p>
                    <p>Reporte qualquer problema de segurança.</p>
                </div>

                <div className={styles.blocoInfo}>
                    <h3>Política de cancelamento</h3>
                    <p>Cancelamentos feitos até 7 dias antes da chegada recebem reembolso. </p>
                    <p>Cancelamentos feitos após esse prazo não são elegíveis para reembolso.</p>
                    <p>Entre em contato para saber mais sobre a política de cancelamento.</p>
                </div>

            </div>

        </div>
    )
}