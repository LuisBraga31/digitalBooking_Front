import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TemaContext } from "../../contexts/globalContext";

import styles from './DetailProduct.module.css';
import elementos from '../../data/elements.json';

import Header from "../../components/Header";
import { DetalheProduto } from "../../components/DetalheProduto";
import Footer from "../../components/Footer";
import { api } from "../../services/api";

export function DetailProductPage() {
    
    const { tema } = useContext(TemaContext);
    const [produto, setProduto] = useState([]);
    const produtoId = useParams();
    
    const getProduto = () => {
        const produtoEncontrado = elementos.find(item => item.id === parseInt(produtoId.id));
        setProduto(produtoEncontrado);
    }

    // const getProduto = async() => {
    //     const res = await api.get(`/v1/produtos/${produtoId.id}`);
    //     setProduto(res.data);
    // }

    useEffect(() => {
        getProduto();
    }, []);

    useEffect(() => {
        window.scrollTo({
          top: 0,
          transitionDelay: 300,
          behavior: "smooth"
        });
    }, []);

    return (
        <>
            <Header/>
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <DetalheProduto produto={produto}/>
            </main>
            <Footer/>
        </>
    )
}