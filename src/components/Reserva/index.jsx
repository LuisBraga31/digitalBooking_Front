import { useEffect, useState } from "react";

import { DetalheProdutoHeader } from "../DetalheProdutoHeader";
import { DetalheProdutoInfo } from "../DetalheProdutoInfo";
import { ReservaFormulario } from "../ReservaFormulario";

import Carregando from '../../assets/imagens/carregando.gif';
import { api } from "../../services/api";

export function Reserva( { produto } ) {

    const [categoria, setCategoria] = useState({'nome': 'Hotel'});
    const [cidade, setCidade] = useState({'nome': ' Cidade ', 'pais': 'Brasil'});
    const [imagens, setImagens] = useState([  
        { id: 1, url: Carregando },
        { id: 2, url: Carregando },
        { id: 3, url: Carregando },
        { id: 4, url: Carregando },
        { id: 5, url: Carregando }]
    );
    const [reservas, setReservas] = useState([]);
  
    // const getCategoria = async() => {
    //     if(produto.categoriasId) {
    //         const res = await api.get(`/v1/categorias/${produto.categoriasId}`);
    //         setCategoria(res.data); 
    //     }
    // }
    
    // const getCidade = async() => {
    //     if(produto.cidadesId) {
    //     const res = await api.get(`/v1/cidades/${produto.cidadesId}`);
    //     setCidade(res.data);
    //     }
    // }

    // const getImagens = async () => {
    //     if (produto.imagensId) {
    //         const imagensList = [];
    //         for (let i = 0; i < produto.imagensId.length; i++) {
    //             const res = await api.get(`/v1/imagens/${produto.imagensId[i]}`);
    //             imagensList.push(res.data);
    //         }
    //         setImagens(imagensList);
    //     }
    // };

    // const getReservas = async() => {
    //     if(produto.id) {
    //     const res = await api.get(`/v1/reservas/porproduto/${produto.id}`);
    //     setReservas(res.data.reservas);
    //     }
    // }

    // useEffect(() => {
    //     getImagens();
    // }, [produto.imagensId]);
    
    // useEffect(() => {
    //     getCategoria();
    //     getCidade();
    //     getReservas();
    // }, [produto]);

    return (
        <>
            <DetalheProdutoHeader {... produto } tipoCategoria={categoria} tipoCidade={cidade} reservaPage={false}/>
            <ReservaFormulario {... produto } tipoCategoria={categoria} tipoCidade={cidade} imagens={imagens} reservas={reservas}/>
            <DetalheProdutoInfo/>       
        </>
    )
}