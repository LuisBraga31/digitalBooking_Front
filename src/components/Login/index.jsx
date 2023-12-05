import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TemaContext } from "../../contexts/globalContext";
import Swal from 'sweetalert2';

import styles from "./LoginForm.module.css";
import { api } from "../../services/api";

export default function Login() {

    const { tema } = useContext(TemaContext);

    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorForm, setErrorForm] = useState(false);

    const navigate = useNavigate();
    const onChangeUserEmail = (e) => setUserEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const onSubmitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data)
        //const registros = JSON.parse(localStorage.getItem('registros'));
        //const existeRegistro = !!localStorage.getItem('registros');
        
        try {
            const response = await api.post('/v1/authentication/login' , { email: data.email, senha: data.password }, 
            {
              headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
              },
            });
            console.log(response);

            if(response.status === 200) {
              localStorage.setItem('token', response.data.jwt);
              navigate('/');
            } 
       
    
          } catch (error) {
            setErrorForm(true);
      
        }
    


        // if(existeRegistro) {
            
        //     const usuarioEncontrado = registros.find(
        //         registro => registro.email === data.email && registro.senha === data.password
        //     );

        //     if(usuarioEncontrado) {
        //         Swal.fire({
        //             title: "Login Efetuado com Sucesso!",
        //             background: `${tema ? '#F3F1ED' : '#1f242d'}`,
        //             color: `${tema ? '#000' : '#FFF'}`,
        //             confirmButtonColor: '#1DBEB4',
        //             icon: "success"
        //           }).then((result) => {
        //             if (result.isConfirmed) {
        //                 localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        //                 navigate('/');
        //             } else {
        //                 localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        //                 navigate('/');
        //             }
        //         });

        //     } else {
        //         Swal.fire({
        //             text: "Por favor, tente novamente, suas credenciais são inválidas!",
        //             background: `${tema ? '#F3F1ED' : '#1f242d'}`,
        //             color: `${tema ? '#000' : '#FFF'}`,
        //             confirmButtonColor: '#1DBEB4',
        //             icon: "error"
        //           }).then((result) => {
        //             if (result.isConfirmed) {
        //                 setErrorForm(true)
        //             } else {
        //                 setErrorForm(true)
        //             }
        //           });
                
        //     }

        // } else {
        //     Swal.fire({
        //         text: "Por favor, tente novamente, suas credenciais são inválidas!",
        //         background: `${tema ? '#F3F1ED' : '#1f242d'}`,
        //         color: `${tema ? '#000' : '#FFF'}`,
        //         confirmButtonColor: '#1DBEB4',
        //         icon: "error"
        //       }).then((result) => {
        //         if (result.isConfirmed) {
        //             setErrorForm(true)
        //         } else {
        //             setErrorForm(true)
        //         }
        //       });
        // }

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
