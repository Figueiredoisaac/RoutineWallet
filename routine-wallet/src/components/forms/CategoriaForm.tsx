// src/components/CardForm.tsx
import React, { useState } from 'react';
import {criarCategoria } from '../../services/api/categoria/api'; // Ajuste o caminho conforme necessário

const CategoriaForm = () => {
  const [categoria, setCategoria] = useState({
    nomeCategoria: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resultado = await criarCategoria(categoria);
      console.log('Categoria cadastrado com sucesso:', resultado);
      // Implemente ações pós-cadastro, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar categoria:', error);
      // Implemente o tratamento de erros apropriado
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nomeCategoria" value={categoria.nomeCategoria} onChange={(e) => setCategoria({ ...categoria, nomeCategoria: e.target.value })} placeholder="Nome da Categoria" required />
      <button type="submit">Cadastrar Categoria</button>
    </form>
  );
};

export default CategoriaForm;
