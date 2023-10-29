import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.css";

export default function Login() {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onChangeUserEmail = (e) => setUserEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const onSubmitForm = (e) => {
        e.preventDefault();
        localStorage.setItem('isLogin', false);

        navigate('/');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        

    };    
    
    return (
        <div className={styles.container}>
            <h1>Iniciar Sessão</h1>

            <form className={styles.form} onSubmit={onSubmitForm}>

                <div className={styles.campoTexto}>
                    <label htmlFor="">E-mail</label>
                    <input
                    name="email"
                    type="email"
                    value={userEmail}
                    onChange={onChangeUserEmail}
                    />
                </div>

                <div className={styles.campoTexto}>
                    <label htmlFor="">Senha</label>
                    <input
                    name="password"
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
