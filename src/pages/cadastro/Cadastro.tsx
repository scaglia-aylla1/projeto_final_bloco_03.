import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const[confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso")
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      }catch(error){
        ToastAlerta("Erro ao cadastrar o usuário!", "erro")
      }
    }else{
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''})
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>
     
      <div className="relative w-full min-h-screen items-center justify-center hidden lg:flex">
        
        {/* Camada de Fundo Transparente: Usa a classe CSS customizada */}
        {/* Esta div cobrirá todo o espaço do contêiner pai e terá a imagem de fundo com opacidade */}
        <div className="absolute inset-0 fundo-cadastro-overlay"></div>

        <form className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-full max-w-lg flex flex-col gap-4 my-8" onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-slate-900 text-4xl font-bold text-center mb-4">Cadastrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-gray-700 text-sm font-semibold mb-1">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value = {usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-gray-700 text-sm font-semibold mb-1">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value = {usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-gray-700 text-sm font-semibold mb-1">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value = {usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Campo Senha com ícone de olho */}
          <div className="flex flex-col w-full relative"> {/* Adicionado 'relative' aqui para posicionar o ícone */}
            <label htmlFor="senha" className="text-gray-700 text-sm font-semibold mb-1">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value = {usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            {/* Ícone de olho: Posicionado absolutamente */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6 cursor-pointer">
              {/* Se usar Phosphor Icons: */}
              {/* <Eye size={20} className="text-gray-500" /> */}
              {/* Ou use um SVG inline como placeholder: */}
              <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-gray-700 text-sm font-semibold mb-1">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>

          <div className="flex justify-between w-full mt-6">
            <button
              type="reset"
              className="rounded-md text-white bg-red-500 hover:bg-red-600 w-1/2 py-2 mr-2 transition-colors duration-200"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md text-white bg-blue-500 hover:bg-blue-600 w-1/2 py-2 ml-2 transition-colors duration-200"
            >
              {isLoading ? <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  /> :
                    <span>Cadastrar</span>
                  }
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;