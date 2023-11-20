/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import styles from './DetalheProduto.module.css'
import elementos from '../../data/elements.json'

import { DetalheProdutoHeader } from '../DetalheProdutoHeader';
import { DetalheProdutoImagens } from '../DetalheProdutoImagens';
import { DetalheProdutoDescricao } from '../DetalheProdutoDescricao';
import { DetalheProdutoCalendario } from '../DetalheProdutoCalendario';
import { DetalheProdutoLocalizacao } from '../DetalheProdutoLocalizacao';
import { DetalheProdutoInfo } from '../DetalheProdutoInfo';
import { api } from '../../services/api';

export function DetalheProduto() {

    const [produto, setProduto] = useState([]);
    const produtoId = useParams();

    // const getProduto = async() => {
    //     const res = await api.get(`/v1/produtos/${produtoId.id}`);
    //     setProduto(res.data);
    // }

    const getProduto = () => {
        const produtoEncontrado = elementos.find(item => item.id === parseInt(produtoId.id));
        setProduto(produtoEncontrado);
    }

    useEffect(() => {
        getProduto();
    }, []);

    return(
        <div className={styles.detalheProduto}>
            <DetalheProdutoHeader produto={produto}/>
            <DetalheProdutoImagens produto={produto}/>
            <DetalheProdutoDescricao {... produto} />
            <DetalheProdutoCalendario/>
            <DetalheProdutoLocalizacao {... produto}/>
            <DetalheProdutoInfo/>
        </div>
    )
}