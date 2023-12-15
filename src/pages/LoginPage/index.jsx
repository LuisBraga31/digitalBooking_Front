import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

import styles from './LoginPage.module.css';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../components/Login";

export function LoginPage() {

    const { tema } = useContext(TemaContext);

    return (
        <>
            <Header />
                <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                    <Login/>
                </main>
            <Footer />
        </>
    )
}