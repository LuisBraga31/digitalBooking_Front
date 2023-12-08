import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FormAdmin } from '../../components/FormAdmin';

import styles from './AdminPage.module.css';
import { TemaContext } from '../../contexts/globalContext';

export function AdminPage() {

    const { tema } = useContext(TemaContext);
    
    const navigate = useNavigate();
    const userToken = localStorage.getItem("token");
    const usuarioData = userToken ? jwtDecode(userToken) : null;
    const [isAdmin] = useState(usuarioData? usuarioData.role : null);

    useEffect(() => {
        if(isAdmin != 'ADMIN') {
            navigate('/');
        }
    }, []);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                { isAdmin != null && ( <FormAdmin /> ) }
            </main>
            <Footer />
        </>
    )
}