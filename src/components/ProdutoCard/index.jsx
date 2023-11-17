/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './ProdutoCard.module.css';

import { IoIosStar } from "react-icons/io";

import { useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

export default function ProdutoCard( { id, img, category, title, location, description, classificacao}) {

  const { tema } = useContext(TemaContext);
  const qtdEstrelas = new Array(classificacao).fill(null);

  return (
    <div className={`${styles.card} ${tema ? '' : styles.darkMode}`}>
        
        <div className={styles.cardImage}> 
            <img src={img} alt="" />
        </div>

        <div className={styles.cardText}>
            <div className={styles.cardCategoryStars}>
              <p className={styles.cardCategory}> {category} </p>
              <div> {qtdEstrelas.map((_, index) => ( <IoIosStar key={index} className={styles.star} size={14}/>  ))}  </div>
            </div>
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