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

export const criarCartao = async (cartaoData: CartaoData) => {
  const response = await fetch(`${API_URL}/cartoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cartaoData)
  });
  if (!response.ok) {
    console.log('Json',JSON.stringify(cartaoData));
    console.log(response);
    throw new Error('Falha ao criar o cartão');
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