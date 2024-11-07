// src/components/CardForm.tsx
import React, { useState } from 'react';
import { criarTransacao } from '../services/api';  // Ajuste o caminho conforme necessário

const TransacaoForm = () => {
  const [transacao, setTransacao] = useState({
    nomeTransacao       : '',
    codigoTipoTransacao : '',
    valorParcela        : 0,
    numeroParcelaTotal  : 0,
    numeroParcelaAtual  : 0,
    idFormaPagamento    : 0,
    idCategoria         : 0,
    dataPrevista        : '',
    dataRealizada       : '',
    flagRecorrente      : false
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resultado = await criarTransacao(transacao);
      console.log('Transação cadastrado com sucesso:', resultado);
      // Implemente ações pós-cadastro, como limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar cartão:', error);
      // Implemente o tratamento de erros apropriado
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nomeTransacao" value={transacao.nomeTransacao} onChange={(e) => setTransacao({ ...transacao, nomeTransacao: e.target.value })} placeholder="Nome da transacao" required />
      <input type="text" name="codigoTipoTransacao" value={transacao.codigoTipoTransacao} onChange={(e) => setTransacao({ ...transacao, codigoTipoTransacao: e.target.value })} placeholder="Codigo Tipo Transacao" required />
      <input type="number" name="valorParcela" value={transacao.valorParcela} onChange={(e) => setTransacao({ ...transacao, valorParcela: Number(e.target.value) })} placeholder="Valor Parcela" required />
      <input type="number" name="numeroParcelaTotal" value={transacao.numeroParcelaTotal} onChange={(e) => setTransacao({ ...transacao, numeroParcelaTotal: Number(e.target.value) })} placeholder="Parcela Total" required />
      <input type="number" name="numeroParcelaAtual" value={transacao.numeroParcelaAtual} onChange={(e) => setTransacao({ ...transacao, numeroParcelaAtual: Number(e.target.value) })} placeholder="Parcela Atual" required />
      <input type="number" name="idFormaPagamento" value={transacao.idFormaPagamento} onChange={(e) => setTransacao({ ...transacao, idFormaPagamento: Number(e.target.value) })} placeholder="Forma de Pagamento" required />
      <input type="number" name="idCategoria" value={transacao.idCategoria} onChange={(e) => setTransacao({ ...transacao, idCategoria: Number(e.target.value) })} placeholder="Categoria" required />
      <input type="date" name="dataPrevista" value={transacao.dataPrevista} onChange={(e) => setTransacao({ ...transacao, dataPrevista: e.target.value })} placeholder="Data Prevista" required />
      <input type="date" name="dataRealizada" value={transacao.dataRealizada} onChange={(e) => setTransacao({ ...transacao, dataRealizada: e.target.value })} placeholder="Data de Realização" required />
      <input type="checkbox" name="flagRecorrente" checked={transacao.flagRecorrente} onChange={(e) => setTransacao({ ...transacao, flagRecorrente: e.target.checked })} placeholder="Flag Recorrente" />      
      <button type="submit">Cadastrar Nova Transacao</button>
    </form>
  );
};

export default TransacaoForm;