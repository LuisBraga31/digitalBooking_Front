/* eslint-disable react/prop-types */
import styles from './ProdutoCard.module.css';

export default function ProdutoCard( { img, category, title, location, description}) {
  return (
    <div className={styles.card}>
        
        <div className={styles.cardImage}> 
            <img src={img} alt="" />
        </div>

        <div className={styles.cardText}>
            <p className={styles.cardCategory}> {category} </p> 
            <h3 className={styles.cardTitle}> {title} </h3>
            <p className={styles.cardLocation}> {location} </p>
            <p className={styles.cardDescription}> {description} </p>
            <button className={styles.cardButton}> Ver mais </button>
        </div>
        
    
    </div>
  )
}