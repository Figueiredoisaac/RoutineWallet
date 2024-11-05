// src/components/WalletForm.tsx
import React, { useState } from 'react';
import { criarCarteira } from '../services/api';  // Ajuste o caminho conforme necessário

const WalletForm = () => {
  const [carteira, setCarteira] = useState({
    nomeCarteira: '',
    nomeInstituicao: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resultado = await criarCarteira(carteira);
      console.log('Carteira cadastrada com sucesso:', resultado);
      // Implemente ações pós-cadastro, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar carteira:', error);
      // Implemente o tratamento de erros apropriado
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nomeCarteira" value={carteira.nomeCarteira} onChange={(e) => setCarteira({ ...carteira, nomeCarteira: e.target.value })} placeholder="Nome da Carteira" required />
      <input type="text" name="nomeInstituicao" value={carteira.nomeInstituicao} onChange={(e) => setCarteira({ ...carteira, nomeInstituicao: e.target.value })} placeholder="Nome da Instituição" required />
      <button type="submit">Cadastrar Carteira</button>
    </form>
  );
};

export default WalletForm;

