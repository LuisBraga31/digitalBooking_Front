import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TemaContext } from '../../contexts/globalContext';
import { api } from '../../services/api';

import styles from './AdminPage.module.css';
import { jwtDecode } from "jwt-decode";

import Header from '../../components/Header';
import { FormAdmin } from '../../components/FormAdmin';
import Footer from '../../components/Footer';

export function AdminPage() {

    const { tema } = useContext(TemaContext);
    const navigate = useNavigate();
    
    const userToken = localStorage.getItem("token");
    const usuarioData = userToken ? jwtDecode(userToken) : null;
    const [isAdmin] = useState(usuarioData? usuarioData.role : null);

    const [listaCidades, setListaCidades] = useState([
        {'id': 1, 'nome': 'Santos-SP'},
        {'id': 2, 'nome': 'São Paulo-SP'}, 
        {'id': 3, 'nome': 'Rio de Janeiro-RJ'}, 
        {'id': 4, 'nome': 'Fortaleza'}
    ]);
    const [listaCategorias, setListaCategorias] = useState([]);

    const getCategorias = async() => {
        const res = await api.get('/v1/categorias?termo=');
        setListaCategorias(res.data.categorias);
    }

    const getListaCidades = async() => {
      const res = await api.get(`/v1/cidades?termo=`);
      setListaCidades(res.data.cidades);
    }

    useEffect(() => {
        getCategorias();
        getListaCidades();
        if(isAdmin != 'ADMIN') {
            navigate('/');
        }
    }, []);

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                { isAdmin != null && ( <FormAdmin listaCidades={listaCidades} listaCategorias={listaCategorias} /> ) }
            </main>
            <Footer />
        </>
    )

}
