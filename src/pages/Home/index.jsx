import { useContext, useEffect, useState } from "react";
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
    const [filterCategory, setFilterCategory] = useState("All");
    const [filterLocation, setFilterLocation] = useState("All");

    // const [categorias, setCategorias] = useState([]);
    // const [produtos, setProdutos] = useState([]);

    // const getCategorias = async() => {
    //     const res = await api.get('/v1/categorias?termo=');
    //     setCategorias(res.data.categorias);
    // }

    // const getProdutos = async() => {
    //     const res = await api.get('/v1/produtos?termo=');
    //     setProdutos(res.data.produtos);
    // }
    
    // useEffect(() => {
    //     getCategorias();
    //     getProdutos();
    // }, []);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <MecanismoBusca setFilterLocation={setFilterLocation}/>
                <Categorias setFilterCategory={setFilterCategory} categorias={categorias}/> 
                <Produtos filterCategory={filterCategory} filterLocation={filterLocation} produtos={produtos}/> 
            </main>
            <Footer />
        </>
    )
}