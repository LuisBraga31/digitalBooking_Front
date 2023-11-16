import { DetalheProduto } from "../../components/DetalheProduto";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from './DetailProduct.module.css';

import { useContext, useEffect } from "react";
import { TemaContext } from "../../contexts/globalContext";


export function DetailProductPage() {
    
    useEffect(() => {
        window.scrollTo({
          top: 0,
          transitionDelay: 300,
          behavior: "smooth"
        });
      }, []);

    const { tema } = useContext(TemaContext);

    return (
        <>
            <Header/>
            <main className={`${styles.main} ${tema ? '' : styles.darkMode}`}>
                <DetalheProduto/>
            </main>
            <Footer/>
        </>
    )
}