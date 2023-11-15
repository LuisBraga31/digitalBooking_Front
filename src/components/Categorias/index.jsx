import styles from './Categorias.module.css';

import ApartamentoImage from '../../assets/categorias/apartamento.png';
import CamaImage from '../../assets/categorias/cama.png';
import HotelImage from '../../assets/categorias/hotel.png';
import HostelImage from '../../assets/categorias/hostel.png';

import { useContext } from 'react';
import { TemaContext } from "../../contexts/globalContext";

export default function Categorias() {

    const { tema } = useContext(TemaContext);

  return (
    <div className={`${styles.categorias } ${tema ? '' : styles.darkMode}`}>
        
        <h2> Buscar por tipo de acomodação </h2>
        
        <div className={styles.blocos}>

            <div className={styles.categoriaItem}> 
                <img src={HotelImage} alt="" />
                <div className={styles.categoriaItemDesc}>
                    <h4> Hotéis </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>

            <div className={styles.categoriaItem}> 
                <img src={HostelImage} alt="" />
                <div className={styles.categoriaItemDesc}>
                    <h4> Hostels </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>

            <div className={styles.categoriaItem}> 
                <img src={ApartamentoImage} alt="" />
                <div className={styles.categoriaItemDesc}>
                    <h4> Apartamentos </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>

            <div className={styles.categoriaItem}> 
                <img src={CamaImage} alt="" />
                <div className={styles.categoriaItemDesc}>
                    <h4> Cama e Café da Manhã </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>


        </div>
    
    </div>
  )
}
