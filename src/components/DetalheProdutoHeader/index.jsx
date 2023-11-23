import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { TemaContext } from "../../contexts/globalContext";

import styles from './DetalheProdutoHeader.module.css';

import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import map from '../../assets/icons/map.png';

export function DetalheProdutoHeader( { nome, tipoCategoria, tipoCidade, reservaPage }) {    

    const { tema } = useContext(TemaContext);

    const qtdEstrelas = new Array(5).fill(null);
    const [avaliacao, setAvaliacao] = useState("Excelente");    

    return(
        <>
            <div className={`${styles.headerContainer} ${tema ? '' : styles.darkModeHeader}`}>
                
                <div className={styles.headerConteudo}>
                    <span> {tipoCategoria.nome} </span>
                    <h2> {nome} </h2>
                </div>

                <Link to='/' className={styles.headerButton}> 
                    <AiOutlineArrowLeft size={32}/> 
                </Link>
                
            </div>
            {reservaPage ? (
            <div className={`${styles.locationContainer} ${tema ? '' : styles.darkModeLocation}`}>

                <div className={styles.locationHeader}>
                    <img src={map} alt="" />
                    <p className={styles.localizacao}>
                        {tipoCidade.nome} - {tipoCidade.pais}
                    </p>
                </div>
    
                <div className={styles.locationClassificacao}>
                    <div className={styles.classificaoResult}>
                        <p> {avaliacao} </p>
                        {qtdEstrelas.map((_, index) => ( <IoIosStar key={index} className={styles.star}/>  ))}
                    </div>
                    <p className={styles.classificacao}> 5 </p>
                </div>
    
            </div>
            ) : (
                <>
                </>
            )
            }
        </>
        
    )
}