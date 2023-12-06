import styles from './FormAdmin.module.css'

export function FormAdmin() {
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.formAdminTitle}>Criar Propriedade</h1>

                <form className={styles.form}>
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

                        <div className={styles.atributosInputs}>
                            <input type="text" />

                            <input type="text" />

                            <button>+</button>
                        </div>
                    </div>

                    <div className={styles.produto}>
                        <h2>Políticas do Produto</h2>
                        <div className={styles.polProduto}>
                            <div>
                                <h3>Regras da casa</h3>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <h3>Saúde e segunrança</h3>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <h3>Política de cancelamento</h3>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.carregarImagens}>
                        <h3>Carregar imagens</h3>
                    </div>
                </form>
            </div>
        </>
    )
}