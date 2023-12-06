import { useContext } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { TemaContext } from '../../contexts/globalContext';
import styles from './AdminPage.module.css';
import { FormAdmin } from '../../components/FormAdmin';

export function AdminPage() {

    const { tema } = useContext(TemaContext);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <FormAdmin />
            </main>
            <Footer />
        </>
    )
}