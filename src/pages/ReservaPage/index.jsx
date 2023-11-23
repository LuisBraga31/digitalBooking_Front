import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from './ReservaPage.module.css';
import elementos from '../../data/elements.json';

import { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { TemaContext } from "../../contexts/globalContext";
import { Reserva } from "../../components/Reserva";

export function ReservaPage() {

    const { tema } = useContext(TemaContext);
    const [produto, setProduto] = useState([]);
    const produtoId = useParams();
    
    const getProduto = () => {
        const produtoEncontrado = elementos.find(item => item.id === parseInt(produtoId.id));
        setProduto(produtoEncontrado);
    }

    useEffect(() => {
        getProduto();
    }, []);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <Reserva produto={produto}/>
            </main>
            <Footer />
        </>
    )
}