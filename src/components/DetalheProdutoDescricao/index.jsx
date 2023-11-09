/* eslint-disable react/prop-types */
import { BsCarFrontFill } from "react-icons/bs";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdPets } from "react-icons/md";
import { FaSwimmer, FaWifi, FaSink } from "react-icons/fa";
import { IoIosSnow } from "react-icons/io";

import styles from './DetalheProdutoDescricao.module.css';

export function DetalheProdutoDescricao({ produto }) {
    return (
        <div className={styles.containerDescricao}>
            <h1 className={styles.titleHeader}>Fique no coração de Buenos Aires</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis natus
                quia maiores quidem quod porro expedita deleniti incidunt, officia at minima sequi
                ducimus temporibus voluptates. Ut voluptatibus ipsum similique?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis natus
                quia maiores quidem quod porro expedita deleniti incidunt, officia at minima sequi
                ducimus temporibus voluptates. Ut voluptatibus ipsum similique?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis natus
                quia maiores quidem quod porro expedita deleniti incidunt, officia at minima sequi
                ducimus temporibus voluptates. Ut voluptatibus ipsum similique?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis natus
                quia maiores quidem quod porro expedita deleniti incidunt, officia at minima sequi
                ducimus temporibus voluptates. Ut voluptatibus ipsum similique?
            </p>
            <h2 className={styles.title}>O que esse lugar oferece?</h2>

            <div className={styles.containerGrid}>
                <div className={styles.grid_item}>
                    <FaSink />
                    <p> Cozinha </p>
                </div>
                <div className={styles.grid_item}>
                    <PiTelevisionSimpleBold />
                    <p> Televisão </p>
                </div>
                <div className={styles.grid_item}>
                    <IoIosSnow />
                    <p> Ar Condicionado </p>
                </div>
                <div className={styles.grid_item}>
                    <MdPets />
                    <p> Aceito Pets </p>
                </div>
                <div className={styles.grid_item}>
                    <BsCarFrontFill />
                    <p> Estacionamento gratuito </p>
                </div>
                <div className={styles.grid_item}>
                    <FaSwimmer />
                    <p> Piscina </p>
                </div>
                <div className={styles.grid_item}>
                    <FaWifi />
                    <p> Wifi </p>
                </div>

            </div>

        </div>
    )
}