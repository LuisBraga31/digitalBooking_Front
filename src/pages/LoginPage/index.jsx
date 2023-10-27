import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../components/Login";


import styles from './LoginPage.module.css';

export function LoginPage() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Login/>
            </main>
            <Footer />
        </>
    )
}