import { MagnifyingGlass, User, ShoppingCart } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, type ReactNode } from "react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const {usuario, handleLogout } = useContext(AuthContext)

  function logout() {

        handleLogout()
        ToastAlerta("O Usuário foi desconectado com sucesso!", "info")
        navigate('/')
  }
  let component: ReactNode

  if (usuario.token !== ""){
    component = (
      <nav className="bg-[#3B3B7C] p-4 shadow-lg flex items-center justify-between font-sans">
      
      <div className="flex items-center space-x-4">
          <Link to='/home' className="text-white text-4xl font-bold tracking-wider ml-6">Farmácia</Link>
      </div>

      
      <div className="flex-grow flex justify-center mx-4">
        <div className="flex w-80 max-w-2xs">
          
          <input
            type="text"
            placeholder="Procurar"
            className="w-80 h-10 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
          />
          {/* Botão de Busca */}
          <button className="bg-cyan-100 p-3 h-10 rounded-r-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200">
            <MagnifyingGlass size={24} className="text-blue-900" />{" "}
            
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <a
          href="#"
          className="text-white hover:text-gray-300 text-lg font-medium"
        >
          <Link to='/categorias' className='hover:underline'>Categorias</Link>
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 text-lg font-medium"
        >
          <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 text-lg font-medium"
        >
          <Link to='/produtos' className='hover:underline'>Produtos</Link>
        </a>

        <button className="text-white hover:text-gray-300">
          <Link to='/perfil' className='hover:underline'><User size={28} /></Link>
        </button>

        <button className="text-white hover:text-gray-300">
          <ShoppingCart size={28} /> {/* Ajustei o size */}
        </button>
        <Link to='' onClick={logout} className='text-white font-bold hover:underline'>Sair</Link>
      </div>
    </nav>
    )
  }
    
  return (
    <>
       {component}
    </>
    
  );
}

export default Navbar;
