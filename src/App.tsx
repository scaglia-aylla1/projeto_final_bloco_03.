// src/App.tsx ou o arquivo onde suas rotas principais são definidas

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ListaCategoria from "./components/categorias/listacategorias/ListaCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import ListaProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import Perfil from "./pages/perfil/Perfil";

// Sua lista de categorias

function App() {
  return (
    <>
        <AuthProvider>
          <ToastContainer />
          <BrowserRouter>
                <Navbar />
                <div className="min-h[80vh]">
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/categorias" element={<ListaCategoria />} />
                    <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                    <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                    <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
                    <Route path="/produtos" element={<ListaProdutos />} />
                    <Route path="/cadastrarproduto" element={<FormProduto />} />
                    <Route path="/editarproduto/:id" element={<FormProduto />} />
                    <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
                    <Route path="/perfil" element={<Perfil />} />
                 </Routes>
                </div>
                <Footer />
          </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App;