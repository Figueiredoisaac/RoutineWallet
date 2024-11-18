import React, { useState } from 'react';
import CardForm from '../components/forms/CardForm';
import WalletForm from '../components/forms/WalletForm';
import CategoriaForm from '@/components/forms/CategoriaForm';
import FormaPagamentoForm from '@/components/forms/FormaPagamentoForm';
import TransacaoForm from '@/components/forms/TransacaoForm';
import styles from '../styles/CadastroPage.module.css'; // Estilos para a página de cadastro

// src/pages/cadastro.tsx

const CadastroPage = () => {
  const [activeSection, setActiveSection] = useState('cartoes');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Cadastro de Cartões, Carteiras e Transações</h1>
      </header>
      <nav className={styles.menu}>
        <ul>
          <li><h3 onClick={() => setActiveSection('cartoes')}>Cartões</h3></li>
          <li><h3 onClick={() => setActiveSection('carteiras')}>Carteiras</h3></li>
          <li><h3 onClick={() => setActiveSection('categorias')}>Categorias</h3></li>
          <li><h3 onClick={() => setActiveSection('formas-pagamento')}>Formas de Pagamento</h3></li>
          <li><h3 onClick={() => setActiveSection('transacoes')}>Transações</h3></li>
        </ul>
      </nav>
      <div className={styles.mainContent}>
        {activeSection === 'cartoes' && (
          <section id="cartoes" className={styles.section}>
            <h2>Cadastro de Cartões</h2>
            <CardForm />
          </section>
        )}
        {activeSection === 'carteiras' && (
          <section id="carteiras" className={styles.section}>
            <h2>Cadastro de Carteiras</h2>
            <WalletForm />
          </section>
        )}
        {activeSection === 'categorias' && (
          <section id="categorias" className={styles.section}>
            <h2>Cadastro de Categorias</h2>
            <CategoriaForm />
          </section>
        )}
        {activeSection === 'formas-pagamento' && (
          <section id="formas-pagamento" className={styles.section}>
            <h2>Cadastro de Formas de Pagamento</h2>
            <FormaPagamentoForm />
          </section>
        )}
        {activeSection === 'transacoes' && (
          <section id="transacoes" className={styles.section}>
            <h2>Cadastro de Transações</h2>
            <TransacaoForm />
          </section>
        )}
      </div>
    </div>
  );
};

export default CadastroPage;
