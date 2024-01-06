import { AkumanomiProps } from "@/utils/types/akumanomi";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Label } from "@/components/label";


async function getData(id: string) {

    try {
        const res = await fetch(`http://localhost:3333/akumanomi/detalhes?id=${id}`, { cache: "no-cache" })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }

}

export default async function AkumanomiDetails({ params: { id } }: { params: { id: string } }) {

    const data: AkumanomiProps = await getData(id)
    
    if (!data) {
        redirect('/')
    }

    return (
        <main className="w-full text-white">

            <Container>

                <section className="w-full flex flex-row gap-10 mt-10">

                    <div className="w-full bg-blue-500 rounded-lg p-4 mb-5 mt-9">

                        <div className="relative  h-96 hover:scale-105 transition-all duration-300">
                            <Image
                                className="rounded-lg object-cover "
                                src={data.url_imagem}
                                alt={data.nome}
                                fill={true}
                                quality={100}
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
                            />
                        </div>

                    </div>

                    <div className="mt-8">

                        <h1 className="font-bold text-xl my-4 text-yellow-500">{data.nome}</h1>
                        <p>{data.descricao}</p>

                        <h2 className="font-bold text-lg mt-7 mb-2 text-yellow-500">Usuário</h2>

                        <h2 className="font-bold text-lg mt-7 mb-2 text-yellow-500">Tipo de akuma no mi</h2>

                        <div className="flex gap-2 flex-wrap">
                            <Label name={data.tipo} />
                        </div>
                    </div>

                </section>

            </Container>
        </main>
    )
}