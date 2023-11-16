/* eslint-disable react/prop-types */
import styles from './Categorias.module.css';

import ApartamentoImage from '../../assets/categorias/apartamento.png';
import CamaImage from '../../assets/categorias/cama.png';
import HotelImage from '../../assets/categorias/hotel.png';
import HostelImage from '../../assets/categorias/hostel.png';

import { useContext, useState } from 'react';
import { TemaContext } from "../../contexts/globalContext";

export default function Categorias( { setFilterCategory}) {

    const { tema } = useContext(TemaContext);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    
    const handleCategoriaClick = (categoria) => {
        setCategoriaSelecionada(categoria);
        setFilterCategory(categoria);
    };

    const verTudo = () => {
        setCategoriaSelecionada(null);
        setFilterCategory("All");
    }

  return (
    <div className={`${styles.categorias } ${tema ? '' : styles.darkMode}`}>
        
        <h2> Buscar por tipo de acomodação </h2>
        
        <div className={styles.blocos}>
            
            <div className={`${styles.categoriaItem} ${categoriaSelecionada === 'Hotel' && styles.selected}`} onClick={() => handleCategoriaClick('Hotel')}> 
                <img src={HotelImage} alt="" />
                <div className={styles.categoriaItemDesc}>
                    <h4> Hotéis </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>

            <div className={`${styles.categoriaItem} ${categoriaSelecionada === 'Hostel' && styles.selected}`} onClick={() => handleCategoriaClick('Hostel')}> 
                <img src={HostelImage} alt="" />
                <div className={styles.categoriaItemDesc}>
                    <h4> Hostels </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>

            <div className={`${styles.categoriaItem} ${categoriaSelecionada === 'Apartamento' && styles.selected}`} onClick={() => handleCategoriaClick('Apartamento')}> 
                <img src={ApartamentoImage} alt="" />
                <div className={styles.categoriaItemDesc}>
                    <h4> Apartamentos </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>

            <div className={`${styles.categoriaItem} ${categoriaSelecionada === 'Cama' && styles.selected}`} onClick={() => handleCategoriaClick('Cama')}> 
                <img src={CamaImage} alt="" />
                <div className={styles.categoriaItemDesc}>

                    <h4> Cama e Café da Manhã </h4>
                    <p> 807.105 hotéis </p>
                </div>
            </div>


        </div>
    
        <button className={styles.verTudoButton} onClick={verTudo}> Ver Tudo </button>

    </div>
  )
}
