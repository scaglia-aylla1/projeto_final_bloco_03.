import { MagnifyingGlass, User, ShoppingCart } from "@phosphor-icons/react";

function Navbar() {
  return (
    // Contêiner principal da Navbar
    <nav className="bg-[#3B3B7C] p-4 shadow-lg flex items-center justify-between font-sans">
      {/* Seção da Logo e Nome da Farmácia */}
      <div className="flex items-center space-x-4">
        {/* Contêiner do logo com borda amarela */}
        <span className="text-white text-3xl font-extrabold tracking-wide ml-2">
          FARMÁCIA
        </span>
      </div>

      {/* Input de Busca com Botão (centralizado e ocupando espaço) */}
      <div className="flex-grow flex justify-center mx-4">
        <div className="flex w-full max-w-xl">
          {" "}
          {/* max-w-xl controla a largura máxima do campo de busca */}
          <input
            type="text"
            placeholder="Procurar"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
          />
          {/* Botão de Busca */}
          <button className="bg-cyan-100 p-3 rounded-r-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200">
            <MagnifyingGlass size={24} className="text-blue-900" />{" "}
            {/* Ícone da Lupa do Phosphor */}
          </button>
        </div>
      </div>

      {/* Navegação da Direita e Ícones de Ação */}
      <div className="flex items-center space-x-6">
        <a
          href="#"
          className="text-white hover:text-gray-300 text-lg font-medium"
        >
          Categorias
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 text-lg font-medium"
        >
          Cadastrar Categoria
        </a>

        {/* Ícone de três pontos para "mais" opções */}

        {/* Ícone de Usuário/Conta */}
        <button className="text-white hover:text-gray-300">
          <User size={28} /> {/* Ajustei o size */}
        </button>

        {/* Ícone de Carrinho de Compras */}
        <button className="text-white hover:text-gray-300">
          <ShoppingCart size={28} /> {/* Ajustei o size */}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
