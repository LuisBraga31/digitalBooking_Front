import Categorias from "../../components/Categorias";
import Produtos from "../../components/Produtos";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from './Home.module.css';
import MecanismoBusca from "../../components/MecanismoBusca";

import { useContext, useState } from "react";
import { TemaContext } from "../../contexts/globalContext";

export function Home() {
    
    const { tema } = useContext(TemaContext);
    const [filterCategory, setFilterCategory] = useState("All");

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <MecanismoBusca />
                <Categorias setFilterCategory={setFilterCategory}/>
                <Produtos filterCategory={filterCategory}/>
            </main>
            <Footer />
        </>
    )
}