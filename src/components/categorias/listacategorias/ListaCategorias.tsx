import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import type { Categoria } from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategorias from "../cardcategorias/CardCategorias";
import { RotatingSquare } from "react-loader-spinner";

function ListaCategorias() {

    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token }
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
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
           
                <div className="min-h-[80vh] bg-cyan-100 flex justify-center ">
                    <div className="align-middle">
                     {categorias.length === 0 && ( <RotatingSquare visible={true} height="100" width="100" color="#4fa94d" ariaLabel="rotating-square-loading" wrapperStyle={{}} wrapperClass="" />  )}
                    </div>
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ListaCategorias;
