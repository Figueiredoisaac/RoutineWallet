import React from 'react';
import CardForm from '../components/CardForm';
import WalletForm from '../components/WalletForm';
import CategoriaForm from '@/components/CategoriaForm';
import FormaPagamentoForm from '@/components/FormaPagamentoForm';

const CadastroPage: React.FC = () => {
  return (
    <div>
      <h1>Cadastro de Cartões e Carteiras</h1>
      <CardForm />
      <WalletForm />
      <CategoriaForm />
      <FormaPagamentoForm />
    </div>
  );
};

export default CadastroPage;