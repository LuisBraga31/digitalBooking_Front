import { BsShare } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import styles from './DetalheProdutoImagens.module.css'

import  ImagemPrincipal  from '../../assets/imagens/image01.png';
import  Image01  from '../../assets/imagens/image02.png';
import  Image02  from '../../assets/imagens/image03.png';
import  Image03  from '../../assets/imagens/image04.png';
import  Image04  from '../../assets/imagens/image05.png';

export function DetalheProdutoImagens() {

    return(
        <div className={styles.container}>
            
            <div className={styles.icons}>

                <BsShare size={24}/>
                <AiOutlineHeart size={28}/>
            
            </div>

            <div className={styles.images}>
                <div className={styles.imagePrincipal}>
                    <img src={ImagemPrincipal} alt="" />
                </div>

                <div className={styles.otherImages}>
                    <img src={Image01} alt="" />
                    <img src={Image02} alt="" />
                    <img src={Image03} alt="" />
                    <img src={Image04} alt="" />
                    <button className={styles.verMais}> Ver Mais </button>
                </div>
            </div>

        </div>
    )
}