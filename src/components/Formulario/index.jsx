import { useState } from "react";
import styles from "./Formulario.module.css";

export default function Formulario() {

  const [errorForm, setErrorForm] = useState(false);
  
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome:'',
    email: '',
    senha: '',
    repetirSenha: '',
  });

  const handleForm = (e) => {
    e.preventDefault()

    if (validForm()) {
      setErrorForm(false); 
    } else {
      setErrorForm(true); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  }

  const validForm = () => {
    let errors = {};
    
    if(formData.nome.trim() === '') {
     errors.nome='O nome é obrigatório!'; 
    }
    if(formData.sobrenome.trim() === '') {
      errors.sobrenome='O sobrenome é obrigatório!'; 
    }
    if(formData.email.trim() === '') {
      errors.email='O email é obrigatório!'; 
    }
    if(formData.senha.length < 6) {
      errors.senha='A senha tem que ter mais de 6 caracteres'; 
    }
    if(formData.repetirSenha != formData.senha) {
      errors.repetirSenha='Senhas não conferem!'; 
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
    
  }

  
  return (
    <div className={styles.container}>

      <h1 className={styles.titulo}>Criar conta</h1>

      <form className={styles.form} onSubmit={handleForm}>

        <div className={styles.divInputs}>

          <div className={errorForm ? `${styles.campoTexto} ${styles.error}` : `${styles.campoTexto}`}>
            <label htmlFor="">Nome</label>
            <input
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleChange}
            />
            {formErrors.nome && <span>{formErrors.nome}</span>}
          </div>

          <div className={errorForm ? `${styles.campoTexto} ${styles.error}` : `${styles.campoTexto}`}>
            <label htmlFor="">Sobrenome</label>
            <input
              name="sobrenome"
              type="text"
              value={formData.sobrenome}      
              onChange={handleChange}
            />
            {formErrors.sobrenome && <span>{formErrors.sobrenome}</span>}
          </div>

        </div>

        <div className={errorForm ? `${styles.campoTexto} ${styles.error}` : `${styles.campoTexto}`}>
          <label htmlFor="">E-mail</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>

        <div className={errorForm ? `${styles.campoTexto} ${styles.error}` : `${styles.campoTexto}`}>
          <label htmlFor="">Senha</label>
          <input
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleChange}
          />
          {formErrors.senha && <span>{formErrors.senha}</span>}
        </div>

        <div className={errorForm ? `${styles.campoTexto} ${styles.error}` : `${styles.campoTexto}`}>
          <label htmlFor="">Confirmar senha</label>
          <input
            name="repetirSenha"
            type="password"
            value={formData.repetirSenha}
            onChange={handleChange}
          />
          {formErrors.repetirSenha && <span>{formErrors.repetirSenha}</span>}
        </div>

        <button className={styles.botao} type="submit">
          Criar conta
        </button>

        <p className={styles.paragrafo}>Já tem uma conta? <a href="./login" >Iniciar sessão</a></p>
      </form>
    </div>
  );
}