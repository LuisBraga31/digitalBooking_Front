import { DetalheProduto } from "../../components/DetalheProduto";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from './DetailProduct.module.css';

export function DetailProductPage() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <DetalheProduto/>
            </main>
            <Footer/>
        </>
    )
}