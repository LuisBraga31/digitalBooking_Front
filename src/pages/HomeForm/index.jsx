import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Formulario from "../../components/Formulario"
import styles from './Home.module.css';

export function HomeForm() {

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