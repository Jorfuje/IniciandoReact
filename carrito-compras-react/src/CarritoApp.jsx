import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { ProductoProvaider } from "./components/context/ProductosProvider"
import { CarritoPage } from "./pages/CarritoPaje"
import { CarritoProvider } from "./components/context/CarritoProvider"

export const CaritoApp = () => {
    return (
        <ProductoProvaider>
           <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
         
                </CarritoProvider>
            </ProductoProvaider>
        
    )
}
