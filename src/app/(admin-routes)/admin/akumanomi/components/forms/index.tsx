'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";

export function NewAkumanomiForm({ token }: { token: string }) {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
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
      
      if (nome === '' || tipo === '' || descricao === '' || imageAvatar === null) {
        alert("Preencha todos os campos!");
        return;
      }

      const formData = new FormData();

      formData.append('nome', nome);
      formData.append('tipo', tipo);
      formData.append('descricao', descricao);
      formData.append('file', imageAvatar);

      const response = await fetch('http://localhost:3333/create_akumanomi', {
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
    setDescricao('');
    setImageAvatar(null);
    setTipo('');
    setAvatarUrl('');

  }

  return (
    <form action="#" method="post" onSubmit={handleRegister}>
      {/* Campo de Upload de Imagem */}
      <div className="mb-4">
          <label className="flex bg-white w-full h-72 justify-center items-center border rounded cursor-pointer">

            <span className="z-20 absolute opacity-70 transition-all  hover:scale-110 hover:opacity-100">
              <FiUpload size={30} color="#064477"/>
            </span>

            <input type="file"  accept="image/png, image/jpeg"  className=" w-full py-2 px-3 hidden" onChange={handleFile} />
           
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
        <label htmlFor="nome" className="block  text-white text-sm font-bold mb-2">
          Nome:
        </label>
        <input value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text" name="nome" id="nome"
          className="border rounded w-full py-2 px-3" />
      </div>


      {/* Campo de Tipo */}
      <div className="mb-4">
        <label htmlFor="usuario" className="block  text-white text-sm font-bold mb-2">
          Tipo de akuma no mi:
        </label>
        <input
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          type="text"
          name="tipo"
          id="tipo"
          className="border rounded w-full py-2 px-3" />
      </div>

      {/* Campo de Descrição */}
      <div className="mb-4">
        <label htmlFor="descricao" className="block  text-white text-sm font-bold mb-2">
          Descrição:
        </label>
        <textarea
          name="descricao"
          id="descricao"
          className="border rounded w-full py-2 px-3"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        >

        </textarea>
      </div>

      {/* Botão de Envio */}
      <div className="flex items-center">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Cadastrar
        </button>
      </div>
    </form>
  )
}