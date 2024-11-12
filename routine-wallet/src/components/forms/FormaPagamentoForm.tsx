// src/components/CardForm.tsx
import React, { useState } from 'react';
import { criarFormaPagamento } from '../../services/api/forma-pagamento/api';

const FormaPagamentoForm = () => {
  const [formaPagamento, setFormaPagamento] = useState({
    nomeFormaPagamento: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resultado = await criarFormaPagamento(formaPagamento);
      console.log('Forma de pagamento cadastrado com sucesso:', resultado);
      // Implemente ações pós-cadastro, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar cartão:', error);
      // Implemente o tratamento de erros apropriado
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nomeFormaPagamento" value={formaPagamento.nomeFormaPagamento} onChange={(e) => setFormaPagamento({ ...formaPagamento, nomeFormaPagamento: e.target.value })} placeholder="Nome da Forma de Pagamento" required />
      <button type="submit">Cadastrar Forma de Pagamento</button>
    </form>
  );
};

export default FormaPagamentoForm;
