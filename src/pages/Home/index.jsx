import Categorias from "../../components/Categorias";
import Produtos from "../../components/Produtos";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from './Home.module.css';
import MecanismoBusca from "../../components/MecanismoBusca";

export function Home() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <MecanismoBusca/>
                <Categorias/>
                <Produtos/>
            </main>
            <Footer />
        </>
    )
}