import { redirect } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/container";
import { Label } from "@/components/label";
import { TripulacaoProps } from "@/utils/types/tripulacao";
import { Perfil } from "@/components/perfil";


async function getData(id: string) {

    try {
        const res = await fetch(`http://localhost:3333/tripulacao/detalhes?id=${id}`, { cache: "no-cache" })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }

}

export default async function TripulacaoDetails({ params: { id } }: { params: { id: string } }) {

    const data: TripulacaoProps = await getData(id)

    if (!data) {
        redirect('/')
    }

    return (
        <main className="w-full  text-white">

            <div className=" bg-opacity-20 bg-blue-950 w-1/2 h-2/4 mx-auto my-auto justify-center items-center p-8 mt-10 rounded-2xl ">
                <div className="flex flex-row justify-center items-center gap-4">
                    <h1 className="font-semibold tracking-widest text-4xl text-yellow-500 text-center">{data.nome}</h1>
                    <div className="w-16 h-16 relative hover:scale-105 transition-all duration-300">
                        <Image
                            className="bg-white rounded-full object-cover"
                            src={data.url_imagem}
                            alt={data.nome}
                            fill={true}
                            quality={100}
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
                        />
                    </div>
                </div>
                <hr className="my-4 border-opacity-80 border-blue-950" />

                <div>
                    <h1 className="font-bold tracking-widest text-xl my-4 text-yellow-500">Capitão</h1>
                    <div className="flex gap-2 flex-wrap">
                        <Label name={data.tripulacaoPersonagem[0]?.personagem.nome} />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold tracking-widest text-xl my-4 text-yellow-500">Tripulação</h1>
                    
                    <section className=" flex gap-2 flex-wrap sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">

                            {data.personagem.map((item) => (

                                <Perfil key={item.id} img={item.url_imagem} name={item.nome} />
                            ))}

                    </section>

                </div>

            </div>





        </main>
    )
}

{/*
                    <div className="w-96 h-96   relative hover:scale-105 transition-all duration-300">
                        <Image
                            className="bg-white rounded-full object-cover border-8 border-red-500"
                            src={data.url_imagem}
                            alt={data.nome}
                            fill={true}
                            quality={100}
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
                        />
    </div>


    
        
         
                    <div className="mt-4">

                     
                        <div className="flex gap-2 flex-wrap">
                            <Label name={data.nome} />
                        </div>

                        <h1 className="font-bold text-xl my-4 text-yellow-500">Capitão</h1>

                        <div className="flex gap-2 flex-wrap">
                            <Perfil img={data.tripulacaoPersonagem[0]?.personagem.url_imagem} name={data.tripulacaoPersonagem[0]?.personagem.nome} />
                        </div>


                        <h2 className="font-bold text-lg mt-7 mb-2 text-yellow-500">Tripulação</h2>

                        <section className=" grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">

                            {data.personagem.map((item) => (

                                <Perfil key={item.id} img={item.url_imagem} name={item.nome} />
                            ))}

                        </section>

                    </div>
         * */
}
