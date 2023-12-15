import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TemaContext } from "../../contexts/globalContext";

import styles from './ListaReservasPage.module.css';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListaReservas from "../../components/ListaReserva/ListaReservas";

export function ListaReservasPage() {

    const { tema } = useContext(TemaContext);
    const navigate = useNavigate();
    const produtoId = useParams();

    const estaLogado = !!localStorage.getItem("token");
    const token = estaLogado ? localStorage.getItem("token") : null;
    const usuarioData = token ? jwtDecode(token) : null; 

    const verificarLogin = () => {

        if(!estaLogado) {
            navigate('/login');
            Swal.fire({
              icon: 'error',
              title: 'Atenção:',
              text: "Faça login na aplicação para acessar página de reserva",
              confirmButtonColor: '#1DBEB4',
            }).then((result) => {
              if (result.isConfirmed) {
                  navigate('/login');
              } else {
                  navigate('/login');
              }
          }) 
        }

        if(usuarioData.id != produtoId.id) {
            navigate('/');
            Swal.fire({
              icon: 'error',
              title: 'Atenção:',
              text: "Você não pode acessar essa página!",
              confirmButtonColor: '#1DBEB4',
            })
        }

    }

    useEffect(() => {
        verificarLogin();
    }, [])

    return (
        <>
            <Header />
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <ListaReservas/>
            </main>
            <Footer />
        </>
    )
}