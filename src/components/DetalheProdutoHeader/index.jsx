/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './DetalheProdutoHeader.module.css';

import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import map from '../../assets/icons/map.png';

import { useContext, useEffect, useState } from "react";
import { TemaContext } from "../../contexts/globalContext";
import { api } from '../../services/api';

export function DetalheProdutoHeader( { produto }) {    

    const { tema } = useContext(TemaContext);
    const qtdEstrelas = new Array(5).fill(null);
    const [avaliacao, setAvaliacao] = useState("Excelente");
    
    const [tipoCategoria, setTipoCategoria] = useState({'nome': 'Hotel'});
    const [tipoCidade, setTipoCidade] = useState({'nome': '... - Brasil'});
  
    // const getCategoria = async() => {
    //   const res = await api.get(`/v1/categorias/${produto.categoriasId}`);
    //   setTipoCategoria(res.data);
    // }
    
    // const getCidade = async() => {
    //     // const res = await api.get(`/v1/cidades/${cidadesId}`);
    //     // setTipoCidade(res.data);
    // }
    
    // useEffect(() => {
    //     getCategoria();
    //     getCidade();
    // }, []);

    return(
        <>
            <div className={`${styles.headerContainer} ${tema ? '' : styles.darkModeHeader}`}>
                
                <div className={styles.headerConteudo}>
                    <span> {tipoCategoria.nome} </span>
                    <h2> {produto.nome} </h2>
                </div>

                <Link to='/' className={styles.headerButton}> 
                    <AiOutlineArrowLeft size={32}/> 
                </Link>
                
            </div>
            
            <div className={`${styles.locationContainer} ${tema ? '' : styles.darkModeLocation}`}>

                <div className={styles.locationHeader}>
                    <img src={map} alt="" />
                    <p className={styles.localizacao}>
                        {tipoCidade.nome}
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
        </>
        
    )
}