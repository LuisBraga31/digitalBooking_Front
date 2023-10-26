import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export function RouteList() {

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home/>} />

                    <Route path="/Formulario" element={<Formulario/>} />

                    <Route path="/LoginForm" element={<LoginForm/>} />

                </Routes>
            
            </BrowserRouter>
        
        </>
    )

}