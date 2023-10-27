import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Formulario from "../../components/Formulario"
import styles from './FormPage.module.css';

export function FormPage() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Formulario />
            </main>
            <Footer />
        </>
    )
}