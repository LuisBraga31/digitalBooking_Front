import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { HomeForm } from "../pages/HomeForm"
import Formulario from "../components/Formulario";
import LoginForm from "../components/LoginForm";

export function RouteList() {

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home/>} />
                    <Route path="/form" element={<HomeForm />} />

                    <Route path="/Formulario" element={<Formulario/>} />

                    <Route path="/LoginForm" element={<LoginForm/>} />

                </Routes>
            
            </BrowserRouter>
        
        </>
    )

}