import { useState, useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";
import { Modal } from "../Modal";

import styles from './DetalheProdutoImagens.module.css'

import { BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import { register } from 'swiper/element/bundle';
register();
import 'swiper/element/css/autoplay';

export function DetalheProdutoImagens( { imagens } ) {

  const { tema } = useContext(TemaContext);
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={`${styles.container} ${tema ? "" : styles.darkMode}`}>
      <div className={styles.icons}>
        <BsShare size={24} />
        <AiOutlineHeart size={28} />
      </div>

      <div className={styles.images}>
        
        <div className={styles.imagePrincipal}>
          {imagens[0] && <img src={imagens[0].url} alt="" />}
        </div> 

        <div className={styles.otherImages}>
          
          {imagens.slice(1).map((image, index) => (
            <img key={index} src={image.url} alt="" />
          ))}

          <button onClick={() => setOpenModal(true)} className={styles.verMais}>
            Ver Mais
          </button>
        </div>

      </div>

      <div className={styles.carrosselSection}>
        <swiper-container effect="coverflow" grabCursor centeredSlides slidesPerView="1" speed={300} autoplay-delay="3000" 
          autoplay-disable-on-interaction="false" className={styles.carousel}>
          {imagens.map((item) => (
            <swiper-slide key={item.id} className={styles.carouselItem}>
              <img src={item.url} className={styles.carouselImage} alt="" />
              <span className={styles.indexAtual}>
                {imagens.indexOf(item) + 1} / {imagens.length}{" "}
              </span>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div className={styles.imagensModal}>
          {imagens[0] && <img src={imagens[0].url} alt="" />}
          <strong>1/15</strong>
          <div className={styles.outrasImagens}>
            {imagens.slice(1).map((image, index) => (
              <img key={index} src={image.url} alt="" />
            ))}
          </div>
        </div>
      </Modal>

    </div>
  );
}