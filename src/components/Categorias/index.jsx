import styles from './Categorias.module.css';

import ApartamentoImage from '../../assets/categorias/apartamento.png';
import CamaImage from '../../assets/categorias/cama.png';
import HotelImage from '../../assets/categorias/hotel.png';
import HostelImage from '../../assets/categorias/hostel.png';

export default function Categorias() {
  return (
    <div className={styles.categorias}>
        
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
