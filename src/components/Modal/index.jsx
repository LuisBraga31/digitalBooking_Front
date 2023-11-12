import { MdClose } from 'react-icons/md'
import styles from './Modal.module.css'

export function Modal({ isOpen, setModalOpen ,children }) {

    if (isOpen) {
        return <div className={styles.modal}>
            <div className={styles.interior}>
                <div>

                    {children}
                </div>

                <button 
                onClick={setModalOpen}
                className={styles.botao}>
                    <MdClose />
                    </button>
            </div>
        </div>
    }

    return null

}