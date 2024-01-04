import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { NewPersonagemForm } from "./components/forms"
import { Container } from "@/components/container"


export default async function PersonagemAdmin(){
    
    const session = await getServerSession(nextAuthOptions)
    
    if (!session) {
        redirect('/')
    }
    
    return(
        <Container>
            <h1 className="text-2xl font-bold text-white  mb-4">Novo personagem</h1>
            <NewPersonagemForm token={session.token}/>

        </Container>
    )
}