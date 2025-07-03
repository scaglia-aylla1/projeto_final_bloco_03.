import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos"
import ModalProduto from "../../components/produtos/ModalProduto/ModalProduto"

function Home() {
    return (
        <>
            <div className="bg-cyan-100 flex justify-center">
                <div className='container grid grid-cols-2 text-cyan-950'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra Medicamentos e Cosméticos! 
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='flex justify-around gap-4'>
                                <ModalProduto />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/mix7flwol/Gemini_Generated_Image_fnlm2rfnlm2rfnlm-removebg-preview.png?updatedAt=1751466638374"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaProdutos />
        </>
    )
}

export default Home
