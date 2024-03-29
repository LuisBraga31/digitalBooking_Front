import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TemaContext } from "../../contexts/globalContext";
import { api } from "../../services/api";

import elementos from '../../data/elements.json';
import styles from './DetailProduct.module.css';

import Header from "../../components/Header";
import { DetalheProduto } from "../../components/DetalheProduto";
import Footer from "../../components/Footer";

export function DetailProductPage() {
    
    const { tema } = useContext(TemaContext);
    const produtoId = useParams();

    const [produto, setProduto] = useState([]);
    
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