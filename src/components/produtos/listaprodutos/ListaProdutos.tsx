import { useNavigate } from "react-router-dom";
import CardProdutos from "../cardprodutos/CardProdutos"
import type { Produto } from "../../../models/Produto";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingSquare } from "react-loader-spinner";


function ListaProdutos() {

    const navigate = useNavigate();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos, {
                headers: {
                    Authorization: token,
                },
            })

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    useEffect(() => {
        buscarProdutos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [produtos.length])


  return (
       <>

            <div>
                {produtos.length === 0 && ( 
                    <RotatingSquare 
                        visible={true} 
                        height="200" 
                        width="200" 
                        color="#4fa94d" 
                        ariaLabel="rotating-square-loading" 
                        wrapperStyle={{}} 
                        wrapperClass="rotating-square-wrapper mx-auto" 
                    />  
                )}
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col mx-2">
                        <div className='container mx-auto my-4
                            grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-3 gap-4'>
                            {produtos.map((produto) => (
                                <CardProdutos key={produto.id} produto={produto}/>

                            ))}
                        
                        </div>
                    </div>
                </div>
            </div>
            
      </>
  )
}

export default ListaProdutos
