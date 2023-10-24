import { Link } from 'react-router-dom';

import DigitalBookingLogo from '../../assets/logo/db.svg';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
               <Link to='/'> <img src={DigitalBookingLogo} alt="" /> </Link> 
            </div>

            <div className={styles.loginBotoes}>
                <button className={styles.button}> Criar Conta </button>
                <button className={styles.button}> Iniciar Sessão </button>
            </div>
        </header>
    )

}