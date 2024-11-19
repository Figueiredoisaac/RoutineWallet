// src/components/TransacoesPorCartao.tsx
import React, { useState, useEffect } from 'react';
import { fetchTransacoesPorCartao } from '../../services/api/transacao/api';
import styles from '../../styles/TransacoesPorCartao.module.css';
import { Transacao } from '../../interfaces/transacao';
import ComboBox from '../common/comboBox/ComboBox';
import { obterCartaoComboBox } from '@/services/api/cartao/api';

const TransacoesPorCartao: React.FC = () => {
const [transacoes, setTransacoes] = useState<Transacao[]>([]);
const [idCartao, setIdCartao] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (idCartao) {
      fetchTransacoes();
    }
  }, [idCartao]);

  const fetchTransacoes = async () => {
    try {
      setLoading(true);
      const data = await fetchTransacoesPorCartao(idCartao);
      setTransacoes(data);
    } catch (error) {
        setError('Erro ao buscar transações');
        console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Carregando transações...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <ComboBox
        fetchData={obterCartaoComboBox}
        placeholder="Selecione um Cartão"
        value={idCartao}
        onChange={(newValue) => setIdCartao(newValue)}
      />
      <h2>Transações do Cartão</h2>
      {transacoes.length > 0 ? (
        <ul className={styles.transacoesList}>
          {transacoes.map((transacao, index) => (
            <li key={index} className={styles.transacaoItem}>
                <p>Nome: {transacao.nomeTransacao}</p>
                <p>Valor: {transacao.valorParcela}</p>
                <p>Parcela: {transacao.numeroParcelaAtual}/{transacao.numeroParcelaTotal}</p>
                <p>Forma de Pagamento: {transacao.formaPagamento.nomeFormaPagamento}</p>
                <p>Categoria: {transacao.categoria.nomeCategoria}</p>
                <p>Carteira: {transacao.carteira.nomeCarteira}</p>
                <p>Cartão: {transacao.cartao.nomeInstituicao}</p>
                <p>Prevista: {new Date(transacao.dataPrevista).toLocaleDateString()}</p>
                <p>Realizada: {transacao.dataRealizada ? new Date(transacao.dataRealizada).toLocaleDateString() : 'Não realizada'}</p>
                <p>Tipo Transação: {transacao.codigoTipoTransacao}</p>
                <p>Recorrencia: {transacao.flagRecorrente? 'Sim': 'Não'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma transação encontrada para este cartão.</p>
      )}
    </div>
  );
};

export default TransacoesPorCartao;
