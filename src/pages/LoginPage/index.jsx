import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";

import styles from './LoginPage.module.css';

export function LoginPage() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <LoginForm />
            </main>
            <Footer />
        </>
    )
}