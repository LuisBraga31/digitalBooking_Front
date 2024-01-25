import { useContext, useEffect, useRef, useState } from "react";
import { TemaContext } from "../../contexts/globalContext";
import { api } from "../../services/api";

import styles from './Home.module.css';
import produtos from '../../data/elements.json';
import categorias from '../../data/categorias.json';

import Header from "../../components/Header";
import Categorias from "../../components/Categorias";
import Produtos from "../../components/Produtos";
import MecanismoBusca from "../../components/MecanismoBusca";
import Footer from "../../components/Footer";

export function Home() {
    
    const { tema } = useContext(TemaContext);
    const produtoRef = useRef(null);
    
    const [filterCategory, setFilterCategory] = useState("All");
    const [filterLocation, setFilterLocation] = useState("All");

    const [listaCidades, setListaCidades] = useState([
        {'id': 1, 'nome': 'Santos-SP'},
        {'id': 2, 'nome': 'São Paulo-SP'}, 
        {'id': 3, 'nome': 'Rio de Janeiro-RJ'}, 
        {'id': 4, 'nome': 'Fortaleza'}
    ]);
    
/*
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);

    const getCategorias = async() => {
        const res = await api.get('/v1/categorias?termo=');
        setCategorias(res.data.categorias);
    }

    const getProdutos = async() => {
        const res = await api.get('/v1/produtos?termo=');
        setProdutos(res.data.produtos);
    }
    
    const getListaCidades = async() => {
      const res = await api.get(`/v1/cidades?termo=`);
      setListaCidades(res.data.cidades);
    }

    useEffect(() => {
        getCategorias();
        getProdutos();
        getListaCidades();
    }, []);
*/

    return (
        <>
            <Header />
                <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                    <MecanismoBusca setFilterLocation={setFilterLocation} listaCidades={listaCidades}/>
                    <Categorias setFilterCategory={setFilterCategory} categorias={categorias} produtoRef={produtoRef}/> 
                    <Produtos filterCategory={filterCategory} filterLocation={filterLocation} produtos={produtos} produtoRef={produtoRef}/> 
                </main>
            <Footer />
        </>
    )
}