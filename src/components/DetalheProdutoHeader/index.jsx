/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './DetalheProdutoHeader.module.css';

import { AiOutlineArrowLeft } from "react-icons/ai";
import map from '../../assets/icons/map.png';

export function DetalheProdutoHeader( { produto }) {    

    return(
        <>
            <div className={styles.headerDetail}>
                
                <div className={styles.headerConteudo}>
                    <span> {produto.category} </span>
                    <h2> {produto.title} </h2>
                </div>

                <Link to='/' className={styles.headerButton}> 
                <AiOutlineArrowLeft size={32}/> 
                </Link>
                
            </div>
            
            <div className={styles.container}>

                <div className={styles.locationHeader}>
                    <img src={map} alt="" />
                    <p className={styles.localizacao}>
                        {produto.location}
                    </p>
                </div>
    
                <div>
                    <p className={styles.classificacao}>Muito bom <strong>8</strong></p>
                </div>
    
            </div>
        </>
        
    )
}