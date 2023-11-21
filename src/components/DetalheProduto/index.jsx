import { useEffect, useState } from 'react';

import styles from './DetalheProduto.module.css'

import { DetalheProdutoHeader } from '../DetalheProdutoHeader';
import { DetalheProdutoImagens } from '../DetalheProdutoImagens';
import { DetalheProdutoDescricao } from '../DetalheProdutoDescricao';
import { DetalheProdutoCalendario } from '../DetalheProdutoCalendario';
import { DetalheProdutoLocalizacao } from '../DetalheProdutoLocalizacao';
import { DetalheProdutoInfo } from '../DetalheProdutoInfo';
import { api } from '../../services/api';

export function DetalheProduto( { produto }) {
    
    const [categoria, setCategoria] = useState({'nome': 'Hotel'});
    const [cidade, setCidade] = useState({'nome': ' Brasil '});
    const [caracteristicas, setCaracteristicas] = useState([]);
  
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
    
    // useEffect(() => {
    //     getCaracteristicas();      
    // }, [produto.caracteristicasProdutoId]);
    
    // useEffect(() => {
    //     getCategoria();
    //     getCidade();
        
    // }, [produto]);

    return(
        <div className={styles.detalheProduto}>
            <DetalheProdutoHeader {... produto} tipoCategoria={categoria} tipoCidade={cidade}/>
            <DetalheProdutoImagens {... produto}/>
            <DetalheProdutoDescricao {... produto} caracteristicas={caracteristicas}/>
            <DetalheProdutoCalendario/>
            <DetalheProdutoLocalizacao {... produto}/>
            <DetalheProdutoInfo/>
        </div>
    )
}