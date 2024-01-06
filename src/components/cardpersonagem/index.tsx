import Link from "next/link";
import Image from "next/image"
import { PersonagemProps } from "@/utils/types/personagem";
import { Label } from "../label";

interface CardPersonagemProps {
    data: PersonagemProps
}

export function CardPersonagem({ data }: CardPersonagemProps) {
    return (
        <Link href={`/personagem/${data.id}`}>

            <section className="w-full h-full bg-blue-950 rounded-lg p-4 mb-5 border-t-8 ">

                <h1 className="text-center font-semibold tracking-widest text-yellow-200 mb-3 text-4xl">{data.afiliacao}</h1>

                <div className="relative w-32 h-32 mx-auto mb-3 hover:scale-105 transition-all duration-300">
                    <Image
                        className=" bg-white rounded-full object-cover"
                        src={data.url_imagem}
                        alt={data.nome}
                        fill={true}
                        quality={100}
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
                    />
                </div>

                <div className=" justify-center items-center flex flex-col mb-3">
                    <p className="font-bold text-yellow-200">{data.nome}</p>
                    {data.apelido? (<p className="text-white ">{data.apelido}</p>): <div className="mt-6"></div>}
                </div>

                <div className="h-72 bg-blue-800 rounded p-3 ">
           
                    <p className="text-white mb-4">Aniversário: {data.aniversario}</p>

                    <p className="text-white mb-1">Recompensa</p>

                    {data.recompensa ? (
                        <div className="flex mb-3">
                            <Label name={`฿ ${data.recompensa}`} />
                        </div>
                    ) : (
                        <div className="flex mb-3">
                            <Label name="Não possui" />
                        </div>
                    )}

                    <h2 className="text-white mb-1">Akuma no mi</h2>

                    {data.akumanomi?.nome ? (
                        <div className="flex mb-3">
                            <Label name={data.akumanomi?.nome} />
                        </div>
                    ) : (
                        <div className="flex mb-3">
                            <Label name="Não possui" />
                        </div>
                    )}

                    <h2 className="text-white mb-1">Tripulação</h2>

                    {data.tripulacao?.nome ? (
                        <div className="flex mb-4">
                            <Label name={data.tripulacao?.nome} />
                        </div>
                    ) : (
                        <div className="flex mb-4">
                            <Label name="Não possui" />
                        </div>
                    )}



                </div>

            </section>



        </Link>

    )
}
