const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CartaoData {
  nomeInstituicao: string;
  valorLimite: number;
  dataVencimento: string;
  dataFechamento: string;
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
    throw new Error('Falha ao criar o cartão');
  }
  return response.json();
};