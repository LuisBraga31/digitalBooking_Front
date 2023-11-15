import { createContext } from "react";
import { useState } from "react";

export const TemaContext = createContext();

const TemaContextProvider = ( {children} ) => {

    const data = localStorage.getItem("theme");
    const [tema, setTema] = useState(data ? JSON.parse(data) : true);

    const mudarTema = () => {
        localStorage.setItem("theme", !tema);
        setTema(!tema);
    }

    return (
        <TemaContext.Provider value={ { tema, mudarTema } }>
            { children}
        </TemaContext.Provider>
    )

}

export default TemaContextProvider;