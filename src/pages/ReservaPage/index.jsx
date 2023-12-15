import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { TemaContext } from "../../contexts/globalContext";
import { api } from "../../services/api";

import styles from './ReservaPage.module.css';
import Swal from 'sweetalert2';

import Footer from "../../components/Footer";
import { Reserva } from "../../components/Reserva";
import Header from "../../components/Header";

export function ReservaPage() {

    const { tema } = useContext(TemaContext);
    const produtoId = useParams();
    const navigate = useNavigate();

    const [produto, setProduto] = useState([]);

    const estaLogado = !!localStorage.getItem("token");
    
    const verificarLogin = () => {

        if(!estaLogado) {
            navigate('/login');
            Swal.fire({
              icon: 'error',
              title: 'Atenção:',
              text: "Faça login na aplicação para acessar página de reserva",
              confirmButtonColor: '#1DBEB4',
            })
        }

    }

    const getProduto = async() => {
        const res = await api.get(`/v1/produtos/${produtoId.id}`);
        setProduto(res.data);
    }

    useEffect(() => {
        getProduto();
        verificarLogin();
        window.scrollTo({
            top: 0,
            transitionDelay: 300,
            behavior: "smooth"
          });
    }, []);

    return (
        <>
            <Header />
                <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                    <Reserva produto={produto}/>       
                </main>
            <Footer />
        </>
    )
}