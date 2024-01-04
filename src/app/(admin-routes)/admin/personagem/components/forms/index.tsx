'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";
export function NewPersonagemForm({ token }: { token: string }) {
  
  const [nome, setNome] = useState('')
  const [apelido, setApelido] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [afiliacao, setAfiliacao] = useState('')
  const [recompensa, setRecompensa] = useState('')
  const [descricao, setDescricao] = useState('')

  const [imageAvatar, setImageAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');

  function handleFile(e: ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png') {

      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]))

    }

  }

 


  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {

      if (nome === '' || afiliacao === '' ||  recompensa === '' || descricao === '' || imageAvatar === null) {
        alert("Preencha todos os campos!");
        return;
      }

      const formData = new FormData();

      formData.append('nome', nome);
      formData.append('apelido', apelido);
      formData.append('aniversario', aniversario);
      formData.append('afiliacao', afiliacao);
      formData.append('recompensa', recompensa);
      formData.append('descricao', descricao);
      formData.append('file', imageAvatar);

      const response = await fetch('http://localhost:3333/create_personagem', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      console.log('Cadastrado com sucesso');
      //toast.success('Cadastrado com sucesso!');
    } catch (err) {
      console.error(err);
      //toast.error("Ops erro ao cadastrar!");
    }

    setNome('');
    setApelido('');
    setAniversario('');
    setDescricao('');
    setImageAvatar(null);
    setAfiliacao('');
    setRecompensa('');
    setAvatarUrl('');

  }

  return (
    <form action="#" method="post" onSubmit={handleRegister}>

      {/* Campo de Upload de Imagem */}
      <div className="mb-4">
        <label className="flex bg-white w-full h-52 justify-center items-center border rounded cursor-pointer">

          <span className="z-20 absolute opacity-70 transition-all  hover:scale-110 hover:opacity-100">
            <FiUpload size={30} color="#064477" />
          </span>

          <input type="file" accept="image/png, image/jpeg" className=" w-full py-2 px-3 hidden" onChange={handleFile} />

          {avatarUrl && (
            <img
              className="w-full h-full  border rounded object-cover"
              src={avatarUrl}
              alt="Foto do produto"
              width={500}
              height={500}
            />
          )}
        </label>
      </div>

      {/* Campo de Nome */}
      <div className="mb-4">

        <input value={nome}
          placeholder="Nome*"
          onChange={(e) => setNome(e.target.value)}
          type="text" name="nome" id="nome"
          className="border rounded w-full py-2 px-3" />
      </div>

      {/* Campo de Apelido */}
      <div className="mb-4">
        <input value={apelido}
          placeholder="Apelido"
          onChange={(e) => setApelido(e.target.value)}
          type="text" name="apelido" id="apelido"
          className="border rounded w-full py-2 px-3" />
      </div>

      {/* Campo de Data Nascimento */}
      <div className="mb-4">
        <input value={aniversario}
          placeholder="Aniversário"
          onChange={(e) => setAniversario(e.target.value)}
          type="text" name="aniversario" id="aniversario"
          className="border rounded w-full py-2 px-3" />
      </div>

      {/* Campo de Afiliacao */}
      <div className="mb-4">

        <input value={afiliacao}
          placeholder="Afiliação*"
          onChange={(e) => setAfiliacao(e.target.value)}
          type="text" name="afiliacao"
          id="afiliacao"
          className="border rounded w-full py-2 px-3" />
      </div>

      {/* Campo de Recompensa */}
      <div className="mb-4">
        <input
          placeholder="Recompensa*"
          value={recompensa}
          onChange={(e) => setRecompensa(e.target.value)}
          type="text"
          name="recompensa"
          id="recompensa"
          className="border rounded w-full py-2 px-3" />
      </div>

      {/* Campo de Descrição */}
      <div className="mb-4">
        <textarea
          placeholder="Descrição*:"
          name="descricao"
          id="descricao"
          className="border rounded w-full py-2 px-3"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        >

        </textarea>
      </div>

 

      {/* Botão de Envio */}
      <div className="flex items-center mb-5">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Cadastrar
        </button>
      </div>
    </form>
  )
}