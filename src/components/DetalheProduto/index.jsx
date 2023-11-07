import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import styles from './DetalheProduto.module.css'
import elementos from '../../data/elements.json'

import { DetalheProdutoHeader } from '../DetalheProdutoHeader';
import { DetalheProdutoImagens } from '../DetalheProdutoImagens';

export function DetalheProduto() {

    const [produto, setProduto] = useState([]);
    const produtoId = useParams();

    const getProduto = () => {
        
        const produtoEncontrado = elementos.find(item => item.id === parseInt(produtoId.id));
        setProduto(produtoEncontrado);
    }

    useEffect(() => {
        getProduto();
    }, []);

    return(
        <div className={styles.container}>
            <DetalheProdutoHeader produto={produto}/>
            <DetalheProdutoImagens produto={produto}/>
        </div>
    )
}