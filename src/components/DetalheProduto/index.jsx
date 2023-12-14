import { useEffect, useState } from 'react';

import styles from './DetalheProduto.module.css'
import caracteristicas from '../../data/caracteristicas.json';

import { DetalheProdutoHeader } from '../DetalheProdutoHeader';
import { DetalheProdutoImagens } from '../DetalheProdutoImagens';
import { DetalheProdutoDescricao } from '../DetalheProdutoDescricao';
import { DetalheProdutoCalendario } from '../DetalheProdutoCalendario';
import { DetalheProdutoLocalizacao } from '../DetalheProdutoLocalizacao';
import { DetalheProdutoInfo } from '../DetalheProdutoInfo';
import { api } from '../../services/api';

import Carregando from '../../assets/imagens/carregando.gif';

export function DetalheProduto( { produto }) {
    
    const [categoria, setCategoria] = useState({'nome': 'Hotel'});
    const [cidade, setCidade] = useState({'nome': ' Cidade ', 'pais': 'Brasil'});
    const [imagens, setImagens] = useState([  
        { id: 1, url: Carregando },
        { id: 2, url: Carregando },
        { id: 3, url: Carregando },
        { id: 4, url: Carregando },
        { id: 5, url: Carregando }]
    );
    const [reservas, setReservas] = useState([]);
    const [caracteristicas, setCaracteristicas] = useState([]);

  
    const getCategoria = async() => {
        if(produto.categoriasId) {
            const res = await api.get(`/v1/categorias/${produto.categoriasId}`);
            setCategoria(res.data); 
        }
    }
    
    const getCidade = async() => {
        if(produto.cidadesId) {
        const res = await api.get(`/v1/cidades/${produto.cidadesId}`);
        setCidade(res.data);
        }
    }

    const getCaracteristicas = async () => {
        if (produto.caracteristicasProdutoId) {
            const caracteristicasList = [];
            for (let i = 0; i < produto.caracteristicasProdutoId.length; i++) {
                const res = await api.get(`/v1/caracteristicas/${produto.caracteristicasProdutoId[i]}`);
                caracteristicasList.push(res.data);
            }
            setCaracteristicas(caracteristicasList);
        }
      };

    const getImagens = async () => {
        if (produto.imagensId) {
            const imagensList = [];
            for (let i = 0; i < produto.imagensId.length; i++) {
                const res = await api.get(`/v1/imagens/${produto.imagensId[i]}`);
                imagensList.push(res.data);
            }
            setImagens(imagensList);
        }
    };

    const getReservas = async() => {
        if(produto.id) {
        const res = await api.get(`/v1/reservas/porproduto/${produto.id}`);
        setReservas(res.data.reservas);
        }
    }
    
    useEffect(() => {
        getCaracteristicas();
    }, [produto.caracteristicasProdutoId]);

    useEffect(() => {
        getImagens();
        getReservas();
    }, [produto.imagensId]);
    
    useEffect(() => {
        getCategoria();
        getCidade();
        
    }, [produto]);

    return(
        <div className={styles.detalheProduto}>
            <DetalheProdutoHeader {... produto} tipoCategoria={categoria} tipoCidade={cidade} reservaPage={true}/>
            <DetalheProdutoImagens {... produto} imagens={imagens}/>
            <DetalheProdutoDescricao {... produto} caracteristicas={caracteristicas}/>
            <DetalheProdutoCalendario reservas={reservas}/>
            <DetalheProdutoLocalizacao {... produto} tipoCidade={cidade}/>
            <DetalheProdutoInfo/>
        </div>
    )
}