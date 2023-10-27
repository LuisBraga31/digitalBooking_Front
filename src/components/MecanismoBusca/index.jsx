import styles from './Mecanismo.module.css';

export default function MecanismoBusca() {
  return (
    <div className={styles.mecanismo}>
        <h1> Buscar ofertas em hotéis, casas e muito mais </h1>
        
        <form className={styles.formBusca}>
            <input className={styles.buscaInput} type="text" placeholder="Onde Vamos?"/>
            <input className={styles.buscaInput} type="text" placeholder="Check in - Check out"/>
            <button className={styles.buscaButton} type="submit"> Buscar </button>
        </form>
    
    </div>
  )
}