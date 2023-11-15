import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Formulario from "../../components/Formulario"
import styles from './FormPage.module.css';

import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

export function FormPage() {

    const { tema } = useContext(TemaContext);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <Formulario />
            </main>
            <Footer />
        </>
    )
}