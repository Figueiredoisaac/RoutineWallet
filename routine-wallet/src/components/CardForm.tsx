// src/components/CardForm.tsx
import React, { useState } from 'react';
import { criarCartao } from '../services/api';  // Ajuste o caminho conforme necessário

const CardForm = () => {
  const [cartao, setCartao] = useState({
    nomeInstituicao: '',
    valorLimite: 0,
    dataVencimento: '',
    dataFechamento: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resultado = await criarCartao(cartao);
      console.log('Cartão cadastrado com sucesso:', resultado);
      // Implemente ações pós-cadastro, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar cartão:', error);
      // Implemente o tratamento de erros apropriado
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nomeInstituicao" value={cartao.nomeInstituicao} onChange={(e) => setCartao({ ...cartao, nomeInstituicao: e.target.value })} placeholder="Nome da Instituição" required />
      <input type="number" name="limite" value={cartao.valorLimite} onChange={(e) => setCartao({ ...cartao, valorLimite: Number(e.target.value) })} placeholder="Limite" required />
      <input type="date" name="vencimento" value={cartao.dataVencimento} onChange={(e) => setCartao({ ...cartao, dataVencimento: e.target.value })} placeholder="Data de Vencimento" required />
      <input type="date" name="fechamento" value={cartao.dataFechamento} onChange={(e) => setCartao({ ...cartao, dataFechamento: e.target.value })} placeholder="Data de Fechamento" required />
      <button type="submit">Cadastrar Cartão</button>
    </form>
  );
};

export default CardForm;
