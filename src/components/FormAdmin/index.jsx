import { useContext, useState } from 'react';
import { TemaContext } from '../../contexts/globalContext';

import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from './FormAdmin.module.css'

export function FormAdmin() {
    
    const { tema } = useContext(TemaContext); 

    const [atributoQtd, setAtributoQtd] = useState(1);
    const [imagemQtd, setImagemQtd] = useState(5);

    const atributos = new Array(atributoQtd).fill(null);
    const imagens = new Array(imagemQtd).fill(null);
    
    function addInput () {
        
        if(atributoQtd <= 9) {
            setAtributoQtd(atributoQtd + 1)
        } else {
            alert('Limite de atributos atingido');
        }
    }

    function addImagens () {
        if(imagemQtd <= 14) {
            setImagemQtd(imagemQtd + 1)
        } else {
            alert("Limite de imagens atingido");
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
    }
    
    return (
        <>
            
            <div className={`${styles.headerAdmin} ${tema ? '' : styles.darkModeHeader}`}>
                
                <div className={styles.headerAdminTitle}>
                    <span> Administração </span>
                </div>

                <Link to='/' className={styles.headerAdminButton}> 
                    <AiOutlineArrowLeft size={32}/> 
                </Link>
                
            </div>

            <div className={`${styles.main} ${tema ? '' : styles.darkMode}`} >
                <h1 className={styles.formAdminTitle}>Criar Propriedade</h1>

                <form className={styles.form} >
                    <div className={styles.sectionGrid}>
                        <div className={styles.input}>
                            <label htmlFor="">Nome da Propriedade</label>
                            <input type="text" />
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Categoria</label>
                            <input type="text" />
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Endereço</label>
                            <input type="text" />
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Cidade</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className={styles.descricao}>
                        <label htmlFor="">Descrição</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className={styles.atributos}>
                        <h2>Adicionar Atributos</h2>
                        
                        {atributos.map((_, index) => ( 
                        
                        <div className={styles.atributosInputs}>

                            
                            <div className={`${styles.atributoItem} ${styles.atributoNome}`}>
                                <label htmlFor="">Nome</label>
                                <input type="text" placeholder='Nome'/>
                            </div>
                      
                            <div className={`${styles.atributoItem} ${styles.atributoIcone}`}>
                                <label htmlFor="">Ícone</label>
                                <input type="url" placeholder='Url do Icone'/>
                            </div>
                               
                            {index == atributoQtd-1 && <button className={styles.atributosBtn} onClick={addInput}>+</button> }

                        </div>
                        
                        ))}                        
                        
                    </div>

                    <div className={styles.produto}>
                        <h2>Políticas do Produto</h2>
                        <div className={styles.polProduto}>
                            <div className={styles.politicaItem}>
                                <h3>Regras da casa</h3>
                                <label htmlFor="">Descrição</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Escreva aqui'></textarea>
                            </div>
                            <div className={styles.politicaItem}>
                                <h3>Saúde e segunrança</h3>
                                <label htmlFor="">Descrição</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Escreva aqui'></textarea>
                            </div>
                            <div className={styles.politicaItem}>
                                <h3>Política de cancelamento</h3>
                                <label htmlFor="">Descrição</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Escreva aqui'></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.carregarImagens}>

                    <h3>Carregar imagens</h3>

                    {imagens.map((_, index) => (
                    
                        <div className={styles.imagensInput}>
                            <input type="text" placeholder='Url da Imagem'/>
                            
                            {index == imagemQtd-1 && <button onClick={addImagens}>+</button>}
                            
                        </div>
                    
                    ))}

                    </div>

                    <div className={styles.btnCriar}>
                        <button onSubmit={handleForm}>Criar</button>                        
                    </div>
                </form>
            </div>
        </>
    )
}