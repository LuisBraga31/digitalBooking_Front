import { useEffect, useState } from 'react';

import styles from './DetalheProduto.module.css'

import { DetalheProdutoHeader } from '../DetalheProdutoHeader';
import { DetalheProdutoImagens } from '../DetalheProdutoImagens';
import { DetalheProdutoDescricao } from '../DetalheProdutoDescricao';
import { DetalheProdutoCalendario } from '../DetalheProdutoCalendario';
import { DetalheProdutoLocalizacao } from '../DetalheProdutoLocalizacao';
import { DetalheProdutoInfo } from '../DetalheProdutoInfo';
import { api } from '../../services/api';

import ImagemPrincipal from '../../assets/imagens/image01.png';
import Image01 from '../../assets/imagens/image02.png';
import Image02 from '../../assets/imagens/image03.png';
import Image03 from '../../assets/imagens/image04.png';
import Image04 from '../../assets/imagens/image05.png';

export function DetalheProduto( { produto }) {
    
    const [categoria, setCategoria] = useState({'nome': 'Hotel'});
    const [cidade, setCidade] = useState({'nome': ' Cidade ', 'pais': 'Brasil'});
    const [caracteristicas, setCaracteristicas] = useState([]);
    const [imagens, setImagens] = useState([  
        { id: 1, url: ImagemPrincipal },
        { id: 2, url: Image01 },
        { id: 3, url: Image02 },
        { id: 4, url: Image03 },
        { id: 5, url: Image04 }]
    );
  
    // const getCategoria = async() => {
    //     if(produto.categoriasId) {
    //         const res = await api.get(`/v1/categorias/${produto.categoriasId}`);
    //         setCategoria(res.data); 
    //     }
    // }
    
    // const getCidade = async() => {
    //     if(produto.cidadesId) {
    //     const res = await api.get(`/v1/cidades/${produto.cidadesId}`);
    //     setCidade(res.data);
    //     }
    // }

    // const getCaracteristicas = async () => {
    //     if (produto.caracteristicasProdutoId) {
    //         const caracteristicasList = [];
    //         for (let i = 0; i < produto.caracteristicasProdutoId.length; i++) {
    //             const res = await api.get(`/v1/caracteristicas/${produto.caracteristicasProdutoId[i]}`);
    //             caracteristicasList.push(res.data);
    //         }
    //         setCaracteristicas(caracteristicasList);
    //     }
    //   };

    // const getImagens = async () => {
    //     if (produto.imagensId) {
    //         const imagensList = [];
    //         for (let i = 0; i < produto.imagensId.length; i++) {
    //             const res = await api.get(`/v1/imagens/${produto.imagensId[i]}`);
    //             imagensList.push(res.data);
    //         }
    //         setImagens(imagensList);
    //     }
    // };
    
    // useEffect(() => {
    //     getCaracteristicas();
    // }, [produto.caracteristicasProdutoId]);

    // useEffect(() => {
    //     getImagens();
    // }, [produto.imagensId]);
    
    // useEffect(() => {
    //     getCategoria();
    //     getCidade();
        
    // }, [produto]);

    return(
        <div className={styles.detalheProduto}>
            <DetalheProdutoHeader {... produto} tipoCategoria={categoria} tipoCidade={cidade}/>
            <DetalheProdutoImagens {... produto} imagens={imagens}/>
            <DetalheProdutoDescricao {... produto} caracteristicas={caracteristicas}/>
            <DetalheProdutoCalendario />
            <DetalheProdutoLocalizacao {... produto} tipoCidade={cidade}/>
            <DetalheProdutoInfo/>
        </div>
    )
}