import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TemaContext } from "../../contexts/globalContext";

import styles from './ProdutoCard.module.css';

import { IoIosStar } from "react-icons/io";
import { api } from "../../services/api";

export default function ProdutoCard( { id, nome, descricao, categoriasId, cidadesId, imagensId}) {

  const { tema } = useContext(TemaContext);
  const qtdEstrelas = new Array(5).fill(null);

  const [tipoCategoria, setTipoCategoria] = useState({'nome': 'CategoriaNome'});
  const [tipoCidade, setTipoCidade] = useState({'nome': 'CidadeNome - Brasil'});
  const [imagem, setImagem] = useState({'url': '/produtos/carregando.gif'});

  // const getCategoria = async() => {
  //   const res = await api.get(`/v1/categorias/${categoriasId}`);
  //   setTipoCategoria(res.data);
  // }

  // const getCidade = async() => {
  //   const res = await api.get(`/v1/cidades/${cidadesId}`);
  //   setTipoCidade(res.data);
  // }

  // const getImagem = async() => {
  //   const res = await api.get(`/v1/imagens/${imagensId[0]}`);
  //   setImagem(res.data);
  // }

  // useEffect(() => {
  //     getCategoria();
  //     getCidade();
  //     getImagem();
  // }, []);

  return (
    <div className={`${styles.card} ${tema ? '' : styles.darkMode}`}>
        
        <div className={styles.cardImage}> 
            <img src={imagem.url} alt="" />
        </div>

        <div className={styles.cardText}>
            
            <div className={styles.cardCategoryStars}>
              <p className={styles.cardCategory}> {tipoCategoria.nome} </p>
              <div> {qtdEstrelas.map((_, index) => ( <IoIosStar key={index} className={styles.star} size={14}/>  ))}  </div>
            </div>
            
            <h3 className={styles.cardTitle}> {nome} </h3>
            <p className={styles.cardLocation}> {tipoCidade.nome} </p>
            <p className={styles.cardDescription}> {descricao} </p>
            
            <Link to={`/produto/${id}`}>
              <button className={styles.cardButton} > Ver mais </button>
            </Link>
            
        </div>  
    
    </div>
  )
}