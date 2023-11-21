import { useContext } from "react";
import { TemaContext } from "../../contexts/globalContext";

import { BsCarFrontFill } from "react-icons/bs";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdPets } from "react-icons/md";
import { FaSwimmer, FaWifi, FaSink } from "react-icons/fa";
import { IoIosSnow } from "react-icons/io";

import styles from './DetalheProdutoDescricao.module.css';

export function DetalheProdutoDescricao({ nome, descricao, caracteristicas }) {

    const { tema } = useContext(TemaContext);
   
    return (
        <div className={`${styles.descricaoContainer} ${tema ? '' : styles.darkMode}`}>
            
            <h1 className={styles.descricaoTitle}>
                {nome}
            </h1>

            <p className={styles.descricaoText}>
                {descricao}
            </p>

            <h2 className={styles.ofertasTitle}>O que esse lugar oferece?</h2>
            
            {/* <div className={styles.ofertasGrid}>
                {caracteristicas.map(item => (
                    <div key={item.id} className={styles.ofertaItem}>
                        <img src={item.icone} alt="" />
                        <p> {item.nome} </p>
                     </div>
                ))}
            </div> */}
            
            <div className={styles.ofertasGrid}>
                <div className={styles.ofertaItem}>
                    <FaSink />
                    <p> Cozinha </p>
                </div>
                
                <div className={styles.ofertaItem}>
                    <PiTelevisionSimpleBold />
                    <p> Televisão </p>
                </div>
                <div className={styles.ofertaItem}>
                    <IoIosSnow />
                    <p> Ar Condicionado </p>
                </div>
                <div className={styles.ofertaItem}>
                    <MdPets />
                    <p> Aceito Pets </p>
                </div>
                <div className={styles.ofertaItem}>
                    <BsCarFrontFill />
                    <p> Estacionamento gratuito </p>
                </div>
                <div className={styles.ofertaItem}>
                    <FaSwimmer />
                    <p> Piscina </p>
                </div>
                <div className={styles.ofertaItem}>
                    <FaWifi />
                    <p> Wifi </p>
                </div>

            </div>

        </div>
    )
}