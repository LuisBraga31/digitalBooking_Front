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

    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        nome: '',
        descricao:'',
        latitude: '',
        longitude: '',
    });

    const estaLogado = !!localStorage.getItem("token");
    const token = estaLogado ? localStorage.getItem("token") : null;

    const [atributoQtd, setAtributoQtd] = useState(2);
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
        if (formErrors[event.target.name]) {
            setFormErrors({ ...formErrors, [event.target.name]: '' });
        } 
    };

    const handleChangeCity = (event) => {
        setSelectedCity(event.target.value);
        if (formErrors[event.target.name]) {
            setFormErrors({ ...formErrors, [event.target.name]: '' });
        } 
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (formErrors[e.target.name]) {
            setFormErrors({ ...formErrors, [e.target.name]: '' });
        }
    }

    const handleImagensChange = (e, index) => {
        const { value } = e.target;
        setListaImagens((prevLista) => {
          const novaLista = [...prevLista];
          novaLista[index] = { titulo: `Imagem ${index + 1}`, url: value };
          return novaLista;
        });
        if (formErrors['imagens']) {
            setFormErrors({ ...formErrors, ['imagens']: '' });
        }
        if (formErrors['imagensVazio']) {
            setFormErrors({ ...formErrors, ['imagensVazio']: '' });
        } 
    };

    const handleAtributosChange = (e, index, campo) => {
        const { value } = e.target;
        setListaAtributos((prevLista) => {
            const novaLista = [...prevLista];
            novaLista[index] = { ...novaLista[index], [campo]: value };
            return novaLista;
        });
        if (formErrors['atributos']) {
            setFormErrors({ ...formErrors, ['atributos']: '' });
        }
        if (formErrors['nomeAtributoVazio']) {
            setFormErrors({ ...formErrors, ['nomeAtributoVazio']: '' });
        }
        if (formErrors['urlAtributoVazio']) {
            setFormErrors({ ...formErrors, ['urlAtributoVazio']: '' });
        }    
    };

    const handleForm = async (e) => {
        e.preventDefault();
        
        if(validForm()) {
            try {
                const caracteristicasPromises = listaAtributos.map(async (atributo) => {
                    const response = await api.post('/v1/caracteristicas', atributo, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    return response.data.id;
                });
        
                const listaAtributosIds = await Promise.all(caracteristicasPromises);
        
                const imagensPromises = listaImagens.map(async (imagem) => {
                    const response = await api.post('/v1/imagens', imagem, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
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
        } else {
            console.log('error')
            return null;
        }

        
    };

    const postProduto = async (formProdutoAdmin) => {
        try {
            const response = await api.post('/v1/produtos', formProdutoAdmin, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
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

    const validForm = () => {
        let errors = {};

        if(formData.nome.trim() === '') {
         errors.nome='O nome é obrigatório!'; 
        }
        if(formData.descricao.length <= 10) {
          errors.descricao='A descrição precisa de no mínimo 10 caracteres'; 
        }
        if(formData.longitude.trim() === '') {
          errors.longitude='A longitude é obrigatória'; 
        }
        if(formData.latitude.trim() === '') {
          errors.latitude='A latitude é obrigatória'; 
        }

        if(listaImagens.length < 5) {
            errors.imagens='É necessário no mínimo 5 imagens';
        }
        for(let i = 0; i < listaImagens.length; i++) {
            if((listaImagens[i].url).length === 0) {
                errors.imagensVazio='Uma Url está vazia';
            }
        }

        if(listaAtributos.length < 2) {
            errors.atributos='É necessário no mínimo 2 atributos';
        }
        for(let i = 0; i < listaAtributos.length; i++) {

            if(listaAtributos[i].nome.length === 0) {
                errors.nomeAtributoVazio='Há nomes de atributos vazios';
            }
            if(listaAtributos[i].icone.length === 0) {
                errors.urlAtributoVazio='Há urls de atributos vazios';
            }
        }

        if(selectedCity === 'Default') {
            errors.cidade = 'Selecione uma cidade';
        }
        if(selectedCategory === 'Default') {
            errors.categoria = 'Selecione uma categoria';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
        
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

                <form className={styles.form} onSubmit={handleForm}>
                    <div className={styles.sectionGrid}>
                        <div className={formErrors.nome ? `${styles.input} ${styles.error}` : `${styles.input}`}>
                            <label htmlFor="">Nome da Propriedade</label>
                            <input name='nome' type="text" placeholder='Nome' onChange={handleChange}/>
                            {formErrors.nome && <span>{formErrors.nome}</span>}
                        </div>

                        <div className={formErrors.categoria ? `${styles.input} ${styles.error}` : `${styles.input}`}>
                            <label htmlFor="">Categoria</label>
                            <select name="categoria" value={selectedCategory} onChange={handleChangeCategory} type="text" required> 
                                <option value="Default" disabled hidden> Categorias </option>
                                {listaCategorias.map(item => (
                                    <option key={item.id} value={item.id}> {item.nome} </option>
                                ))}
                            </select>
                            {formErrors.categoria && <span>{formErrors.categoria}</span>}
                        </div>

                        <div className={formErrors.cidade ? `${styles.input} ${styles.error}` : `${styles.input}`}>
                            <label htmlFor="">Cidade</label>
                            <select name="cidade" value={selectedCity} onChange={handleChangeCity} type="text" required> 
                                <option value="Default" disabled hidden> Cidades </option>
                                {listaCidades.map(item => (
                                    <option key={item.id} value={item.id}> {item.nome} </option>
                                ))}
                            </select>
                            {formErrors.cidade && <span>{formErrors.cidade}</span>}
                        </div>

                        <div className={formErrors.latitude ? `${styles.input} ${styles.error}` : `${styles.input}`}>
                            <label htmlFor="">Latitude</label>
                            <input name='latitude' type="text" placeholder='Latitude' onChange={handleChange}/>
                            {formErrors.latitude && <span>{formErrors.latitude}</span>}
                        </div>

                        <div className={formErrors.longitude ? `${styles.input} ${styles.error}` : `${styles.input}`}>
                            <label htmlFor="">Longitude</label>
                            <input name='longitude' type="text" placeholder='Longitude' onChange={handleChange} />
                            {formErrors.longitude && <span>{formErrors.longitude}</span>}
                        </div>
                    </div>

                    <div className={formErrors.descricao ? `${styles.input} ${styles.error}` : `${styles.input}`}>
                        <label htmlFor="">Descrição</label>
                        <textarea name="descricao" id="" cols="30" rows="10" placeholder='Descrição' onChange={handleChange} ></textarea>
                        {formErrors.descricao && <span>{formErrors.descricao}</span>}
                    </div>

                    <div className={formErrors.atributos || formErrors.nomeAtributoVazio || formErrors.urlAtributoVazio ? `${styles.atributos} ${styles.error}` : `${styles.atributos}`}>
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
                        {formErrors.atributos && <span>{formErrors.atributos}</span>}
                        {formErrors.nomeAtributoVazio && <span>{formErrors.nomeAtributoVazio}</span>}
                        {formErrors.urlAtributoVazio && <span>{formErrors.urlAtributoVazio}</span>}
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

                    <div className={formErrors.imagens || formErrors.imagensVazio ? `${styles.carregarImagens} ${styles.error}` : `${styles.carregarImagens}`}>

                    <h3>Carregar imagens</h3>

                    {imagens.map((_, index) => (
                    
                        <div className={styles.imagensInput} key={index}>
                            <input type="url" placeholder='Url da Imagem' onChange={(e) => handleImagensChange(e, index)}/>     
                            {index == imagemQtd-1 && <button onClick={addImagens}>+</button>}
                            
                        </div>
                    
                    ))}
                    {formErrors.imagens && <span>{formErrors.imagens}</span>}
                    {formErrors.imagensVazio && <span>{formErrors.imagensVazio}</span>}
                    </div>

                    <div className={styles.btnCriar}>
                        <button >Criar</button>                        
                    </div>
                </form>
            </div>
        </>
    )
}