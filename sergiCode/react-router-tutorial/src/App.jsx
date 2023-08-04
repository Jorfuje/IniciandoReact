import React from "react";
import { NavBar } from "./components/NavBar";
import { HomeScreen } from "./routes/HomeScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { LoginScreen } from "./routes/LoginScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import { UsuarioProvider } from "./context/UsuarioProvider";

export const App = () => {
  return (
    <UsuarioProvider>
      <NavBar ></NavBar>

      <Routes>
        <Route path='/' element={ <HomeScreen></HomeScreen> }></Route>
        <Route path='/login' element={ <LoginScreen></LoginScreen> }></Route>
        <Route path='/about' element={ <AboutScreen></AboutScreen> }></Route>
        <Route path='/contact' element={ <ContactScreen></ContactScreen> }></Route>
        <Route path="/*" element={<Navigate to='/' />}></Route>
      </Routes>
    </UsuarioProvider>
  );
};
