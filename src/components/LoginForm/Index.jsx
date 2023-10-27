import { useState } from "react";

import styles from "./LoginForm.module.css";

export default function LoginForm() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const onSubmitForm = (e) => {
        e.preventDefault();
        alert('Bem-vindo: ${userName}');
    };    
    
    return (
        <div className={styles.container}>
            <h1>Login</h1>

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
                    

            <button className={styles.botao} type="submit">Enviar</button>

            <p>Ainda não tem conta? <a href="./Formulario">Registre-se</a></p>

            </form>
        </div>
    );    
    
}
