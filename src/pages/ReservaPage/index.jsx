import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { TemaContext } from "../../contexts/globalContext";
import { api } from "../../services/api";

import styles from './ReservaPage.module.css';
import elementos from '../../data/elements.json';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Reserva } from "../../components/Reserva";

import Swal from 'sweetalert2';

export function ReservaPage() {

    const { tema } = useContext(TemaContext);
    const [produto, setProduto] = useState([]);
    const produtoId = useParams();
    const navigate = useNavigate();

    const estaLogado = !!localStorage.getItem("token");
    
    const verificarLogin = () => {
        console.log(estaLogado)
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
      }

    const getProduto = () => {
        const produtoEncontrado = elementos.find(item => item.id === parseInt(produtoId.id));
        setProduto(produtoEncontrado);
    }

    // const getProduto = async() => {
    //     const res = await api.get(`/v1/produtos/${produtoId.id}`);
    //     setProduto(res.data);
    // }

    useEffect(() => {
        getProduto();
        verificarLogin();
    }, []);

    useEffect(() => {
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