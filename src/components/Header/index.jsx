import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSun } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";

import styles from './Header.module.css';
import { TemaContext } from "../../contexts/globalContext";

import { jwtDecode } from "jwt-decode";

export default function Header() {

    const { tema, mudarTema } = useContext(TemaContext);
    
    const location = useLocation();
    const navigate = useNavigate();

    const userToken = localStorage.getItem("token");
    const token = userToken;
    const usuarioData = token ? jwtDecode(token) : null;

    const [login, setLogin] = useState(userToken ? false : true);
    const [menuLateral, setMenuLateral] = useState(false);
    const [tokenValid, setTokenValid] = useState(true);
    const [isAdmin] = useState(usuarioData? usuarioData.role : null);
    const [userId] = useState(usuarioData? usuarioData.id : null);

    const showMenu = () => setMenuLateral(!menuLateral);

    const logout = () => {
        setLogin(true);
        localStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {

        if(usuarioData != null) {
            const now = new Date().getTime() / 1000 / 3600;
            const expiration = Math.floor(usuarioData.exp / 3600);
            
            if(expiration > now) {
                setTokenValid(true);
            } else {
                setTokenValid(false);
            }
        }

        if(!tokenValid) {
            logout();
        }

    }, []);

    return (
        <header className={`${styles.header} ${tema ? '' : styles.darkMode}`}>
            <div className={styles.logo}>
               <Link to='/'> <div className={`${styles.image} ${tema ? '' : styles.imageDark}`}> </div> </Link> 
            </div>

            { login ? (
            
            <div className={styles.loginBotoes}>
                 {location.pathname !== '/form' && (<Link to='/form'><button className={styles.button}> Criar Conta </button></Link>)}
                 {location.pathname !== '/login' && (<Link to='/login'><button className={styles.button}> Iniciar Sessão </button></Link>)}
                 
                 <button className={styles.btn} onClick={mudarTema}> 
                    {tema ? ( <FaSun className={styles.sun} size={20}/> ) : ( <GiMoon className={styles.moon} size={20}/>)}
                 </button>
            </div>

            ) : (
            <div className={styles.loginArea}>
                <div className={styles.admin}>
                    {isAdmin == 'ADMIN' && ( <Link className="adminButton" to='/administracao'> Administrar </Link> )}
                    {isAdmin == 'USER' && ( <Link className="adminButton" to={`/reservas/${userId}`}> Minhas Reservas </Link> )}
                </div>

                <div className={styles.loginAvatar}> {usuarioData.nome.charAt(0).toUpperCase()}{usuarioData.sobrenome.charAt(0).toUpperCase()} </div>
                <div className={styles.loginText}> 
                    <p> Olá, </p>
                    <strong> {usuarioData.nome} {usuarioData.sobrenome} </strong>
                </div>
                <button className={styles.buttonLogout} onClick={logout}> Logout </button>
                <button className={styles.btn} onClick={mudarTema}> 
                    {tema ? ( <FaSun className={styles.sun} size={20}/> ) : ( <GiMoon className={styles.moon} size={20}/>)}
                 </button>
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
                            {isAdmin == 'ADMIN' && (<Link className="adminButton" to='/administracao'> Administrar </Link>)}  
                        </div>
                    )}
                    
                </div>

                <div className={styles.menuBody}>
                    
                    { login ? (
                    
                    <div className={styles.menuButtons}>
                        {location.pathname !== '/form' && (<Link to="/form "> <button className={styles.buttonItem}> Criar Conta </button> </Link>)}
                        {location.pathname == '/' && (<hr color="black" width="90%" size="1" className={styles.linha}/>)}
                        {location.pathname !== '/login' && (<Link to="/login"> <button className={styles.buttonItem}>  Iniciar Sessão </button> </Link>)}
                        <button className={styles.btn} onClick={mudarTema}> 
                            {tema ? ( <FaSun className={styles.sun} size={20}/> ) : ( <GiMoon className={styles.moon} size={20}/>)}
                        </button>
                    </div>
                    
                    ) : (
                    <div className={styles.menuBodyLogado}>
                        <button className={`${styles.btn} ${styles.btnMobileLog}`} onClick={mudarTema}> 
                            {tema ? ( <FaSun className={styles.sun} size={20}/> ) : ( <GiMoon className={styles.moon} size={20}/>)}
                        </button> 
                        <p> Deseja <span onClick={logout}> encerrar a sessão </span> ? </p>
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