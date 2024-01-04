
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Container } from "@/components/container";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NewAkumanomiForm } from "./components/forms";

export default async function AkumanomiAdmin() {

    const session = await getServerSession(nextAuthOptions)
 
    if (!session) {
        redirect('/')
    }

    return (
        <Container>
            <h1 className="text-2xl font-bold text-white  mb-4">Nova Akuma no mi</h1>
            <NewAkumanomiForm token={session.token}/>
        </Container>
    )
}