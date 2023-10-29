import { useState } from "react";
import styles from "./Formulario.module.css";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>

      <h1 className={styles.titulo}>Criar conta</h1>

      <form className={styles.form} onSubmit={handleForm}>

        <div className={styles.divInputs}>

          <div className={styles.campoTexto}>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className={styles.campoTexto}>
            <label htmlFor="">Sobrenome</label>
            <input
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>

        </div>

        <div className={styles.campoTexto}>
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.campoTexto}>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className={styles.campoTexto}>
          <label htmlFor="">Confirmar senha</label>
          <input
            type="password"
          />
        </div>

        <button className={styles.botao} type="submit">
          Criar conta
        </button>

        <p className={styles.paragrafo}>Já tem uma conta? <a href="./login" >Iniciar sessão</a></p>
      </form>
    </div>
  );
}