/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './DetalheProdutoHeader.module.css';

import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import map from '../../assets/icons/map.png';

import { useContext, useEffect, useState } from "react";
import { TemaContext } from "../../contexts/globalContext";

export function DetalheProdutoHeader( { produto }) {    

    const { tema } = useContext(TemaContext);
    const qtdEstrelas = new Array(produto.classificacao).fill(null);
    const [avaliacao, setAvaliacao] = useState(null);
    
    useEffect( () => {
        if(produto.classificacao === 5) {
            setAvaliacao("Excelente");
        } else if (produto.classificacao === 4) {
            setAvaliacao("Muito Bom")
        } else if (produto.classificacao <= 3) {
            setAvaliacao("Ok");
        }
        
    }, [produto])

    return(
        <>
            <div className={`${styles.headerContainer} ${tema ? '' : styles.darkModeHeader}`}>
                
                <div className={styles.headerConteudo}>
                    <span> {produto.category} </span>
                    <h2> {produto.title} </h2>
                </div>

                <Link to='/' className={styles.headerButton}> 
                    <AiOutlineArrowLeft size={32}/> 
                </Link>
                
            </div>
            
            <div className={`${styles.locationContainer} ${tema ? '' : styles.darkModeLocation}`}>

                <div className={styles.locationHeader}>
                    <img src={map} alt="" />
                    <p className={styles.localizacao}>
                        {produto.location}
                    </p>
                </div>
    
                <div className={styles.locationClassificacao}>
                    <div className={styles.classificaoResult}>
                        <p> {avaliacao} </p>
                        {qtdEstrelas.map((_, index) => ( <IoIosStar key={index} className={styles.star}/>  ))}
                    </div>
                    <p className={styles.classificacao}> {produto.classificacao} </p>
                </div>
    
            </div>
        </>
        
    )
}