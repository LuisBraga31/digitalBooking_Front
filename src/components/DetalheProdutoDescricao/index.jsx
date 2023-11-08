/* eslint-disable react/prop-types */
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
                <div className={styles.cozinha}>Cozinha</div>
                <div className={styles.televisor}>Televisor</div>
                <div className={styles.ar}>Ar Condicionado</div>
                <div className={styles.pets}>Aceito Pets</div>
                <div className={styles.estacionamento}>Estacionamento gratuito</div>
                <div className={styles.piscina}>Piscina</div>
                <div className={styles.wifi}>Wifi</div>

            </div>

        </div>
    )
}