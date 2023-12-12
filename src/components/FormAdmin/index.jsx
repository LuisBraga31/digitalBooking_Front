import { useContext, useState } from 'react';
import { TemaContext } from '../../contexts/globalContext';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from './FormAdmin.module.css'
import { api } from '../../services/api';

export function FormAdmin( {listaCidades, listaCategorias} ) {
    
    const { tema } = useContext(TemaContext);
    const navigate = useNavigate(); 

    const [selectedCategory, setSelectedCategory] = useState('Default');
    const [selectedCity, setSelectedCity] = useState('Default');
    const [listaImagens, setListaImagens] = useState([]);
    const [listaAtributos, setListaAtributos] = useState([]);

    const [formData, setFormData] = useState({
        nome: '',
        descricao:'',
        latitude: '',
        longitude: '',
    });

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
    
    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value); 
    };

    const handleChangeCity = (event) => {
        setSelectedCity(event.target.value); 
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleImagensChange = (e, index) => {
        const { value } = e.target;
        setListaImagens((prevLista) => {
          const novaLista = [...prevLista];
          novaLista[index] = { titulo: `Imagem ${index + 1}`, url: value };
          return novaLista;
        });
    };

    const handleAtributosChange = (e, index, campo) => {
        const { value } = e.target;
        setListaAtributos((prevLista) => {
            const novaLista = [...prevLista];
            novaLista[index] = { ...novaLista[index], [campo]: value };
            return novaLista;
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();
    
        try {
            const caracteristicasPromises = listaAtributos.map(async (atributo) => {
                const response = await api.post('/v1/caracteristicas', atributo, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                });
                return response.data.id;
            });
    
            const listaAtributosIds = await Promise.all(caracteristicasPromises);
    
            const imagensPromises = listaImagens.map(async (imagem) => {
                const response = await api.post('/v1/imagens', imagem, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                });
                return response.data.id;
            });

            const listaImagensIds = await Promise.all(imagensPromises);
            
            const formProdutoAdmin = {
                nome: formData.nome,
                descricao: formData.descricao,
                latitude: formData.latitude,
                longitude: formData.longitude,
                cidadesId: selectedCity,
                categoriasId: selectedCategory,
                imagensId: listaImagensIds,
                caracteristicasProdutoId: listaAtributosIds,
            };
    
            await postProduto(formProdutoAdmin);
    
        } catch (error) {
            console.log(error);
        }
    };

    const postProduto = async (formProdutoAdmin) => {
        try {
            const response = await api.post('/v1/produtos', formProdutoAdmin, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
    
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Novo Produto Criado!',
                    background: `${tema ? '#F3F1ED' : '#112'}`,
                    color: `#1DBEB4`,
                    html: `<span style='color: ${tema ? '#000' : '#FFF'} ;'>A nova propriedade foi criada com sucesso!</span>`,
                    confirmButtonColor: '#1DBEB4',
                  }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    } else {
                        navigate('/');
                    }
                }) 
            }
    
        } catch (error) {
            console.log(error);
        }
    };

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

                <form className={styles.form} onSubmit={handleForm}>
                    <div className={styles.sectionGrid}>
                        <div className={styles.input}>
                            <label htmlFor="">Nome da Propriedade</label>
                            <input name='nome' type="text" placeholder='Nome' onChange={handleChange} required/>
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Categoria</label>
                            <select value={selectedCategory} onChange={handleChangeCategory} type="text" required> 
                                <option value="Default" disabled hidden> Categorias </option>
                                {listaCategorias.map(item => (
                                    <option key={item.id} value={item.id}> {item.nome} </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Endereço</label>
                            <input type="text" placeholder='Endereço' required/>
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Cidade</label>
                            <select value={selectedCity} onChange={handleChangeCity} type="text" required> 
                                <option value="Default" disabled hidden> Cidades </option>
                                {listaCidades.map(item => (
                                    <option key={item.id} value={item.id}> {item.nome} </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Latitude</label>
                            <input name='latitude' type="text" placeholder='Latitude' onChange={handleChange} required/>
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="">Longitude</label>
                            <input name='longitude' type="text" placeholder='Longitude' onChange={handleChange} required/>
                        </div>
                    </div>

                    <div className={styles.descricao}>
                        <label htmlFor="">Descrição</label>
                        <textarea name="descricao" id="" cols="30" rows="10" placeholder='Descrição' onChange={handleChange} required></textarea>
                    </div>

                    <div className={styles.atributos}>
                        <h2>Adicionar Atributos</h2>
                        
                        {atributos.map((_, index) => ( 
                        
                        <div className={styles.atributosInputs} key={index}>

                            
                            <div className={`${styles.atributoItem} ${styles.atributoNome}`}>
                                <label htmlFor="">Nome</label>
                                <input type="text" placeholder='Nome' onChange={(e) => handleAtributosChange(e, index, 'nome')}/>
                            </div>
                      
                            <div className={`${styles.atributoItem} ${styles.atributoIcone}`}>
                                <label htmlFor="">Ícone</label>
                                <input type="url" placeholder='Url do Icone' onChange={(e) => handleAtributosChange(e, index, 'icone')}/>
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
                    
                        <div className={styles.imagensInput} key={index}>
                            <input type="text" placeholder='Url da Imagem' onChange={(e) => handleImagensChange(e, index)}/>     
                            {index == imagemQtd-1 && <button onClick={addImagens}>+</button>}
                            
                        </div>
                    
                    ))}

                    </div>

                    <div className={styles.btnCriar}>
                        <button >Criar</button>                        
                    </div>
                </form>
            </div>
        </>
    )
}