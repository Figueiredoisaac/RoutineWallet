import React from 'react';
import CardForm from '../components/forms/CardForm';
import WalletForm from '../components/forms/WalletForm';
import CategoriaForm from '@/components/forms/CategoriaForm';
import FormaPagamentoForm from '@/components/forms/FormaPagamentoForm';
import TransacaoForm from '@/components/forms/TransacaoForm';

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