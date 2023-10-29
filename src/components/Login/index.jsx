import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.css";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const onSubmitForm = (e) => {
        e.preventDefault();
        alert(`Bem-vindo: ${userName}`);
        localStorage.setItem('isLogin', false);
        navigate('/');
    };    
    
    return (
        <div className={styles.container}>
            <h1>Iniciar Sessão</h1>

            <form className={styles.form} onSubmit={onSubmitForm}>

                <div className={styles.campoTexto}>
                    <label htmlFor="">E-mail</label>
                    <input
                    type="text"
                    value={userName}
                    onChange={onChangeUserName}
                    />
                </div>

                <div className={styles.campoTexto}>
                    <label htmlFor="">Senha</label>
                    <input
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    />
                </div>
                    

            <button className={styles.botao} type="submit">Entrar</button>

            <p>Ainda não tem conta? <a href="./form">Registre-se</a></p>

            </form>
        </div>
    );    
    
}
