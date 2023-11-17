import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import styles from "./LoginForm.module.css";
import { TemaContext } from "../../contexts/globalContext";

export default function Login() {

    const { tema } = useContext(TemaContext);

    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorForm, setErrorForm] = useState(false);

    const navigate = useNavigate();
    const onChangeUserEmail = (e) => setUserEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);


    const onSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const registros = JSON.parse(localStorage.getItem('registros'));
        
        const existeRegistro = !!localStorage.getItem('registros');
        
        if(existeRegistro) {
            
            const usuarioEncontrado = registros.find(
                registro => registro.email === data.email && registro.senha === data.password
            );

            if(usuarioEncontrado) {
                Swal.fire({
                    title: "Login Efetuado com Sucesso!",
                    icon: "success"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
                        navigate('/');
                    } else {
                        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
                        navigate('/');
                    }
                });

            } else {
                Swal.fire({
                    title: "Por favor, tente novamente, suas credenciais são inválidas",
                    icon: "error"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        setErrorForm(true)
                    } else {
                        setErrorForm(true)
                    }
                  });
                
            }

        } else {
            Swal.fire({
                title: "Por favor, tente novamente, suas credenciais são inválidas",
                icon: "error"
              }).then((result) => {
                if (result.isConfirmed) {
                    setErrorForm(true)
                } else {
                    setErrorForm(true)
                }
              });
        }

    };  

  
    return (
        <div className={styles.container}>
            <h1>Iniciar Sessão</h1>

            <form className={`${styles.form} ${tema ? '' : styles.darkMode}`} onSubmit={onSubmitForm}>

                <div className={errorForm ? `${styles.campoTexto} ${styles.error}` : `${styles.campoTexto}`}>
                    <label htmlFor="">E-mail</label>
                    <input
                    name="email"
                    type="email"
                    value={userEmail}
                    onChange={onChangeUserEmail}
                    />   
                </div>

                <div className={errorForm ? `${styles.campoTexto} ${styles.error}` : `${styles.campoTexto}`}>
                    <label htmlFor="">Senha</label>
                    <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    />
                </div>
                    

            <button className={styles.botao} type="submit">Entrar</button>

            <p>Ainda não tem conta? <Link to='../form'>Registre-se</Link></p>

            </form>
        </div>
    );    
    
}
