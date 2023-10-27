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
                    <Route path="/Form" element={<FormPage />} />
                    <Route path="/Login" element={<LoginPage/>} />

                </Routes>
            
            </BrowserRouter>
        
        </>
    )

}