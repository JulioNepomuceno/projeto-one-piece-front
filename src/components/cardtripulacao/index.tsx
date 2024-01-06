import Link from "next/link";
import Image from "next/image"
import { TripulacaoProps } from "@/utils/types/tripulacao";

interface CardTripulacaoProps{
    data: TripulacaoProps
}

export function CardTripulacao({data}: CardTripulacaoProps){
    return (
        <Link href={`/tripulacao/${data.id}`}>

            <section className="w-full bg-blue-400 rounded-lg p-4 mb-5">
                
                <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
                    <Image
                        className=" bg-white rounded-lg object-cover"
                        src={data.url_imagem} 
                        alt={data.nome}
                        fill={true}
                        quality={100}
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
                    />
                </div>

                <div className="flex items-center mt-4 justify-between">
                    <p className="text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.nome}</p>
                </div>

            </section>
        </Link>

    )
}