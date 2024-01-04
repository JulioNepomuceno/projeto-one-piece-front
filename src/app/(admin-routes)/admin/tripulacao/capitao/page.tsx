'use client'
import { Container } from "@/components/container";
import { useEffect, useState } from "react";

export default function CapitaoAdd() {

  const [tripulacaoData, setTripulacaoData] = useState([]);
  const [personagemData, setPersonagemData] = useState([]);

  const [selectedOptionPersonagem, setSelectedOptionPersonagem] = useState('');
  const [selectedOptionTripulacao, setSelectedOptionTripulacao] = useState('');


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
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3333/personagem');

        if (!response.ok) {
          throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const data = await response.json();
        setPersonagemData(data);

      } catch (error) {
        console.error('Erro ao obter dados da API:', error.message);
        setPersonagemData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-white">Adicionar capitão</h1>

      <div className="mb-4">

        <div className="mb-4">

          <label htmlFor="nome" className="block  text-white text-sm font-bold mb-2">
            Capitão:
          </label>

          <select
            className="border rounded w-full py-2 px-3 "
            value={selectedOptionPersonagem}
            onChange={(e) => setSelectedOptionPersonagem(e.target.value)}
          >
            <option value="" disabled hidden>
              Selecione um capitão
            </option>
            {personagemData.map((personagem) => (
              <option key={personagem.id} value={personagem.id} >
                {personagem.nome}
              </option>
            ))}
          </select>

        </div>

        <div className="mb-4">

          <label htmlFor="nome" className="block  text-white text-sm font-bold mb-2">
            Tripulação:
          </label>

          <select
            className="border rounded w-full py-2 px-3 "
            value={selectedOptionTripulacao}
            onChange={(e) => setSelectedOptionTripulacao(e.target.value)}
          >
            <option value="" disabled hidden>
              Selecione uma tripulação
            </option>
            {tripulacaoData.map((tripulacao) => (
              <option key={tripulacao.id} value={tripulacao.id} >
                {tripulacao.nome}
              </option>
            ))}
          </select>

        </div>

        <div className="mb-4">

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Cadastrar
          </button>

        </div>

      </div>
    </Container>
  )
}