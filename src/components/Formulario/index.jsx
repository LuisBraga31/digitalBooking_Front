import { useState } from 'react'
import  styles  from './formulario.module.css'

export default function Formulario() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const handleForm = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <h1>Criar conta</h1>
            <form className={styles.container} onSubmit={handleForm}>
                <label htmlFor="">Nome</label>
                <input 
                type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="">Sobrenome</label>
                <input 
                type="text" 
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                />
                <label htmlFor="">E-mail</label>
                <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Senha</label>
                <input 
                type="text" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
                <label htmlFor="">Confirmar senha</label>
                <input type="text" />

                <button className={styles.botao} type="submit">
                    Criar conta
                </button>
            </form>
        </div>
    )
}