import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

 
 export const PageNotFound = () => {
    return(
        <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
            
            <div className="text-center px-5 mx-5">
                <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
                <p className="font-semibold text-xl">Whooop! Lo sentimos mucho.</p>
                <p className="font-light">
                <span> Puedes regresar al </span>
                <Link 
                    href="/" 
                    className="font-normal hover:underline transition-all text-blue-700 font-bold"
                >
                    Inicio
                </Link>
                </p>
            </div>

            <div className="px-5 mx-5">
                <Image 
                    src="/img/error.jpg"
                    alt="not fopund"
                    className="p-5 sm:p-0"
                    width={ 300 } 
                    height={ 300 }   
                />
            </div>

        </div>
    )
 }