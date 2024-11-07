const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CartaoData {
  nomeInstituicao: string;
  valorLimite: number;
  dataVencimento: string;
  dataFechamento: string;
}

interface CarteiraData {
  nomeCarteira: string;
  nomeInstituicao: string;
}

interface FormaPagamentoData {
  nomeFormaPagamento: string;
}

interface CategoriaData {
  nomeCategoria: string;
}

interface TransacaoData{
nomeTransacao : string;
codigoTipoTransacao : string;
valorParcela : number;
numeroParcelaTotal : number;
numeroParcelaAtual : number;
idFormaPagamento : number;
idCategoria : number;
dataPrevista : string;
dataRealizada : string;
flagRecorrente : boolean;
}

export const criarTransacao = async (transacaoData: TransacaoData) => {
  const response = await fetch(`${API_URL}/transacoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transacaoData)
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a Transação');
  }
  return response.json();
};

export const criarCartao = async (cartaoData: CartaoData) => {
  const response = await fetch(`${API_URL}/cartoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cartaoData)
  });
  if (!response.ok) {
    throw new Error('Falha ao criar o cartão');
  }
  return response.json();
};

export const criarFormaPagamento = async (formaPagamentoData: FormaPagamentoData) => {
  const response = await fetch(`${API_URL}/formas-pagamento`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formaPagamentoData)
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a forma de pagamento');
  }
  return response.json();
};

export const criarCategoria = async (categoriaData: CategoriaData) => {
  const response = await fetch(`${API_URL}/categorias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoriaData)
  });
  if (!response.ok) {
    console.log('Json',JSON.stringify(categoriaData));
    throw new Error('Falha ao criar a categoria');
  }
  return response.json();
};

export const criarCarteira = async (carteiraData: CarteiraData) => {
  const response = await fetch(`${API_URL}/carteiras`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(carteiraData)
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a carteira');
  }
  return response.json();
};