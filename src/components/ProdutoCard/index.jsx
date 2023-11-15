/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './ProdutoCard.module.css';

import { useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

export default function ProdutoCard( { id, img, category, title, location, description}) {

  const { tema } = useContext(TemaContext);

  return (
    <div className={`${styles.card} ${tema ? '' : styles.darkMode}`}>
        
        <div className={styles.cardImage}> 
            <img src={img} alt="" />
        </div>

        <div className={styles.cardText}>
            <p className={styles.cardCategory}> {category} </p> 
            <h3 className={styles.cardTitle}> {title} </h3>
            <p className={styles.cardLocation}> {location} </p>
            <p className={styles.cardDescription}> {description} </p>
            <Link to={`/producto/${id}`}>
            <button className={styles.cardButton} > Ver mais </button>
            </Link>
            
  
        </div>
        
    
    </div>
  )
}