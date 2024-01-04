'use client'
import { Container } from "@/components/container";
import { useEffect, useState } from "react";

export default function CapitaoAdd() {

  const [tripulacaoData, setTripulacaoData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3333/tripulacao');

        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const data = await response.json();
        setTripulacaoData(data);

      } catch (error) {
        console.error('Erro ao obter dados da API:', error.message);
        setTripulacaoData([]);
      }
    };

    fetchData();
  }, []); // O segundo parâmetro vazio [] garante que o useEffect só será executado uma vez, equivalente ao componentDidMount



  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-white">Adicionar capitão</h1>

      <div className="mb-4">


        <select className="border rounded w-full py-2 px-3">
          {tripulacaoData.map((tripulacao) => (
            <option key={tripulacao.id} value={tripulacao.id} >
              {tripulacao.nome}
            </option>
          ))}
        </select>
        {selectedOption && (
          <p>O tripulante selecionado é: {tripulacaoData.find((t) => t.id === selectedOption)?.nome}</p>
        )}

      </div>
    </Container>
  )
}