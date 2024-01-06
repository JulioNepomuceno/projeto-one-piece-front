'use client'

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FiUser, FiLoader, FiLock, FiLogOut } from 'react-icons/fi'
import { useRouter } from "next/navigation";

export function Header() {

    const { status, data } = useSession()
    //const router = useRouter();

    async function handleLogout() {
     /* await signOut({redirect: false});
        router.replace('/')*/
        await signOut();
    }

    return (
        <header className="w-full flex items-center px-2 py-4 bg-slate-50 h-20 shadow-sm">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/">
                    <h1 className="font-bold text-2xl pl-1">
                        <span className="text-red-500">ONE</span> PIECE
                    </h1>
                </Link>

                <nav className="flex gap-8">
                    <Link href="/personagem">
                        Personagens
                    </Link>

                    <Link href="/tripulacao">
                        Tripulação
                    </Link>

                    <Link href="/akumanomi">
                        Akuma no mi
                    </Link>

                </nav>




                {status === "loading" && (
                    <button className="animate-spin">
                        <FiLoader size={26} color="#4b5563" />
                    </button>
                )}

                {status === "unauthenticated" && (
                    <Link href="/login">
                        <FiLock size={26} color="#4b5563" />
                    </Link>
                )}

                {status === "authenticated" && (
                    <div className="flex items-baseline gap-4">
                        <Link href="/admin">
                            <FiUser size={26} color="#4b5563" />
                        </Link>

                        <button onClick={handleLogout}>
                            <FiLogOut size={26} color="#ff2313" />
                        </button>
                    </div>
                )}


            </div>
        </header>
    )
}