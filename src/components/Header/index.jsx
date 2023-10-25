import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";

import styles from './Header.module.css';

export default function Header() {

    const [menuLateral, setMenuLateral] = useState(false);

    const showMenu = () => setMenuLateral(!menuLateral);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
               <Link to='/'> <div className={styles.image}> </div> </Link> 
            </div>

            <div className={styles.loginBotoes}>
                <button className={styles.button}> Criar Conta </button>
                <button className={styles.button}> Iniciar Sessão </button>
            </div>

            <div className={styles.menuHamburger}>
                <IoMenu className={styles.menu} size={28} onClick={showMenu}/>
            </div>

            <nav className={ menuLateral ? styles.ativado : styles.desativado}>
                <div className={styles.menuHeader}>
                    <GrClose className={styles.closeButton} size={22} onClick={showMenu}/>
                    <h4 className={styles.menuTitle}> Menu </h4>
                </div>
                <div className={styles.menuBody}>
                    <div className={styles.menuButtons}>
                        <button className={styles.buttonItem}> Criar Conta </button>
                        <hr color="black" width="90%" size="1" className={styles.linha}/>
                        <button className={styles.buttonItem}> Iniciar Sessão </button>
                    </div>
                    <div>
                        <ul className={styles.lista}>
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