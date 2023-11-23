import { DetalheProdutoHeader } from "../DetalheProdutoHeader";
import { DetalheProdutoInfo } from "../DetalheProdutoInfo";
import { ReservaFormulario } from "../ReservaFormulario";
import { useState } from "react";

export function Reserva( { produto } ) {

    const [categoria, setCategoria] = useState({'nome': 'Hotel'});
    const [cidade, setCidade] = useState({'nome': ' Cidade ', 'pais': 'Brasil'});

    return (
        <>
            <DetalheProdutoHeader {... produto } tipoCategoria={categoria} tipoCidade={cidade} reservaPage={false}/>
            <ReservaFormulario />
            <DetalheProdutoInfo/>       
        </>
    )
}