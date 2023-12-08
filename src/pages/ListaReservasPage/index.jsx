import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

import styles from './ListaReservasPage.module.css';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListaReservas from "../../components/ListaReserva/ListaReservas";

export function ListaReservasPage() {

    const { tema } = useContext(TemaContext);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <ListaReservas/>
            </main>
            <Footer />
        </>
    )
}