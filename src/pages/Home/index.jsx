import Categorias from "../../components/Categorias";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from './Home.module.css';

export function Home() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Categorias/>
            </main>
            <Footer />
        </>
    )
}