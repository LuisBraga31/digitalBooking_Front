import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import { FormPage } from "../pages/FormPage";
import { LoginPage } from "../pages/LoginPage";

export function RouteList() {

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home/>} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/login" element={<LoginPage/>} />

                </Routes>
            
            </BrowserRouter>
        
        </>
    )

}