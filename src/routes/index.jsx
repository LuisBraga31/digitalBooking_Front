import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import { FormPage } from "../pages/FormPage";
import { LoginPage } from "../pages/LoginPage";
import { DetailProductPage } from "../pages/DetailProductPage";
import TemaContextProvider from "../contexts/globalContext";

export function RouteList() {

    return (
        <>
            <BrowserRouter>
            <TemaContextProvider>
                
                <Routes>

                    <Route path="/" element={<Home/>} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/producto/:id" element={<DetailProductPage />} />

                </Routes>

            </TemaContextProvider>
            </BrowserRouter>
        
        </>
    )

}