import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { Container } from "@/components/container"
import { NewTripulacaoForm } from "./components/forms"
import Link from "next/link"


export default async function Tripulacao() {

    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/')
    }

    return (
        <Container>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-white">Nova tripulação</h1>

                <div>
                    <Link href="/admin/tripulacao/capitao" className="bg-blue-500 text-white px-4 py-1 rounded">
                        Adicionar Capitão
                    </Link>
                </div>
            </div>
            <NewTripulacaoForm token={session.token} />

        </Container>
    );
}