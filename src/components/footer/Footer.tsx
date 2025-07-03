import { InstagramLogo, LinkedinLogo, TwitterLogoIcon } from '@phosphor-icons/react'
import { useContext, type ReactNode } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    // eslint-disable-next-line prefer-const
    let data = new Date().getFullYear()

    const{ usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className="flex justify-center bg-[#3B3B7C]  text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmácia | Copyright: {data}
                        </p>
                    <p className='text-xs font-medium'>Acesse nossas redes sociais</p>
                   <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/aylla-scaglia/" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/aylla_scaglia" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="https://x.com/home" target="_blank">
                            <TwitterLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer