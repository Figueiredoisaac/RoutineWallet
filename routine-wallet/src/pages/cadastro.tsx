import React from 'react';
import CardForm from '../components/CardForm';
import WalletForm from '../components/WalletForm';

const CadastroPage: React.FC = () => {
  return (
    <div>
      <h1>Cadastro de Cartões e Carteiras</h1>
      <CardForm />
      <WalletForm />
    </div>
  );
};

export default CadastroPage;