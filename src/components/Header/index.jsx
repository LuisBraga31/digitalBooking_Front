import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from "react";

import styles from './Header.module.css';
import { TemaContext } from "../../contexts/globalContext";

export default function Header() {

    const { tema, mudarTema } = useContext(TemaContext);
    
    const location = useLocation();
    const usuarioData = JSON.parse(localStorage.getItem("usuarioLogado"));

    const [login, setLogin] = useState(usuarioData ? false : true);
    const [menuLateral, setMenuLateral] = useState(false);

    const showMenu = () => setMenuLateral(!menuLateral);

    const logout = () => {
        setLogin(true);
        localStorage.removeItem('usuarioLogado');
    }

    return (
        <header className={`${styles.header} ${tema ? '' : styles.darkMode}`}>
            <div className={styles.logo}>
               <Link to='/'> <div className={`${styles.image} ${tema ? '' : styles.imageDark}`}> </div> </Link> 
            </div>

            { login ? (
            
            <div className={styles.loginBotoes}>
                 {location.pathname !== '/form' && (<Link to='/form'><button className={styles.button}> Criar Conta </button></Link>)}
                 {location.pathname !== '/login' && (<Link to='/login'><button className={styles.button}> Iniciar Sessão </button></Link>)}
                 <button onClick={mudarTema}> Mudar Tema </button>
            </div>

            ) : (
            <div className={styles.loginArea}>
                <div className={styles.loginAvatar}> {usuarioData.nome.charAt(0).toUpperCase()}{usuarioData.sobrenome.charAt(0).toUpperCase()} </div>
                <div className={styles.loginText}> 
                    <p> Olá, </p>
                    <strong> {usuarioData.nome} {usuarioData.sobrenome} </strong>
                </div>
                <button className={styles.buttonLogout} onClick={logout}> Logout </button>
            </div>
            )

            }

            <div className={styles.menuHamburger}>
                <IoMenu className={styles.menu} size={28} onClick={showMenu}/>
            </div>

            <nav className={ menuLateral ? `${styles.menuLateral} ${styles.ativo}` : styles.menuLateral}>
                
                <div className={styles.menuHeader}>
                    <GrClose className={styles.closeButton} size={22} onClick={showMenu}/>
                    
                    { login ? (
                        <h4 className={styles.menuHeaderTitle}> MENU </h4>
                    ) : (
                        <div className={styles.menuHeaderLogado}>
                            <div className={styles.menuAvatar}> {usuarioData.nome.charAt(0).toUpperCase()}{usuarioData.sobrenome.charAt(0).toUpperCase()} </div>
                            <div className={styles.menuText}> 
                                <p> Olá, </p>
                                <strong> {usuarioData.nome} {usuarioData.sobrenome} </strong>
                            </div>  
                        </div>
                    )}
                    
                </div>

                <div className={styles.menuBody}>
                    
                    { login ? (
                    
                    <div className={styles.menuButtons}>
                        {location.pathname !== '/form' && (<Link to="/form "> <button className={styles.buttonItem}> Criar Conta </button> </Link>)}
                        {location.pathname == '/' && (<hr color="black" width="90%" size="1" className={styles.linha}/>)}
                        {location.pathname !== '/login' && (<Link to="/login"> <button className={styles.buttonItem}>  Iniciar Sessão </button> </Link>)}
                        <button onClick={mudarTema}> Mudar Tema </button>
                    </div>
                    
                    ) : (
                    <div className={styles.menuBodyLogado}> 
                        <p> Deseja <span onClick={logout}> encerrar a sessão </span> ? </p>
                        <hr color="black" width="100%" size="1" />
                    </div>
                    )}

                    <div>
                        <ul className={styles.menuFooterLista}>
                            <li>
                                <FaFacebook size={24}/>
                            </li>
                            <li>
                                <FaInstagram size={24}/>
                            </li>
                            <li>
                                <FaLinkedin size={24}/>
                            </li>
                            <li>
                                <FaTwitter size={24}/>
                            </li>
                        </ul>
                    </div>

                </div>   

            </nav>

        </header>
    )

}