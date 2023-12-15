import logoImg from "/public/logo.svg"
import Link from "next/link";
import Image from "next/image";


export function Header() {
    
    return (
        <header className="w-full h-28 bg-blue-500 text-white px-2 font-bold">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className="flex justify-center items-center gap-4">

                    <Link href='/'>
                        <Image
                            className="w-full h-28" 
                            src={logoImg} 
                            alt="logo" 
                            quality={100} 
                            priority={true}/>
                    </Link>

                    <Link href='/'>
                        Akuma no mi
                    </Link>

                    <Link href='/crews'>
                        Tripulações
                    </Link>

                    <Link href='/characters'>
                        Personagens
                    </Link>


                </nav>
            </div>
        </header>
    )
}