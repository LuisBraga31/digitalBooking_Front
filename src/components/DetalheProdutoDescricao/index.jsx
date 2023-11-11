/* eslint-disable react/prop-types */
import { BsCarFrontFill } from "react-icons/bs";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdPets } from "react-icons/md";
import { FaSwimmer, FaWifi, FaSink } from "react-icons/fa";
import { IoIosSnow } from "react-icons/io";

import styles from './DetalheProdutoDescricao.module.css';

export function DetalheProdutoDescricao({ produto }) {
    return (
        <div className={styles.descricaoContainer}>
            
            <h1 className={styles.descricaoTitle}>
                {produto.location}
            </h1>

            <p className={styles.descricaoText}>
                {produto.description}
            </p>

            <h2 className={styles.ofertasTitle}>O que esse lugar oferece?</h2>

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