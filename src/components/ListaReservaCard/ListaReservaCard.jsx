import { useContext, useEffect, useState } from 'react';

import styles from './ListaReservaCard.module.css'
import map from '../../assets/icons/map.png';
import { TemaContext } from '../../contexts/globalContext';
import { api } from '../../services/api';

export default function ListaReservaCard( {id, horaInicio, dataInicio, dataFinal, status, produtosId, position} ) {

    const { tema } = useContext(TemaContext);
    const [produto, setProduto] = useState([]);
    const [categoria, setCategoria] = useState({'nome': 'CategoriaNome'});
    const [cidade, setCidade] = useState({'nome': 'CidadeNome - Brasil'});
    const [imagem, setImagem] = useState({'url': '/produtos/carregando.gif'});
    
    // const getProduto = async() => {
    //     const res = await api.get(`/v1/produtos/${produtosId}`);
    //     setProduto(res.data);
        
    //     if(res.status === 200) {
    //         const resCategoria = await api.get(`/v1/categorias/${res.data.categoriasId}`);
    //         setCategoria(resCategoria.data);
            
    //         const resCidade = await api.get(`/v1/cidades/${res.data.cidadesId}`);
    //         setCidade(resCidade.data);
        
    //         const resImagem = await api.get(`/v1/imagens/${res.data.imagensId[0]}`);
    //         setImagem(resImagem.data);
    //     }
    
    // }

    // useEffect(() => {
    //     getProduto();
    // }, []);


    return (
           
            <div className={`${styles.reservasList} ${tema ? '' : styles.darkMode}`}>
                
                <div className={`${styles.reservaNumber} ${tema ? '' : styles.darkModeItem}`}>
                    <span> {position+1} </span>
                </div>

                <div className={`${styles.reservaProduto} ${tema ? '' : styles.darkModeItem}`}>
                    
                    <div className={styles.reservaProdutoImg}>
                        <img src={imagem.url} alt="" />
                    </div>
                    
                    <div className={styles.reservaProdutoInfos}>
                        <span> {categoria.nome} </span>
                        <h3> {produto.nome} </h3>
                        <div className={styles.reservaProdutoLocal}>
                            <img src={map} alt="" />
                            <span> {cidade.nome}  -  {cidade.pais} </span>
                        </div>
                    </div>

                </div>

                <div className={`${styles.reservaInfos} ${tema ? '' : styles.darkModeItem}`}>
                    <h2> Detalhes da Reserva </h2>
                    <div className={styles.reservaInfosDetail}>
                        <span> Check In: {dataInicio} </span>
                        <span> Check Out: {dataFinal} </span>
                        <span> Hora de Chegada: {horaInicio} </span>
                    </div>
                    <strong> Status: {status} </strong>
                </div>


            </div>

    )


}