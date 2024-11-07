import React from 'react';
import CardForm from '../components/CardForm';
import WalletForm from '../components/WalletForm';
import CategoriaForm from '@/components/CategoriaForm';
import FormaPagamentoForm from '@/components/FormaPagamentoForm';
import TransacaoForm from '@/components/TransacaoForm';

const CadastroPage: React.FC = () => {
  return (
    <div>
      <h1>Cadastro de Cartões e Carteiras</h1>
      <CardForm />
      <WalletForm />
      <CategoriaForm />
      <FormaPagamentoForm />
      <TransacaoForm />
    </div>
  );
};

export default CadastroPage;