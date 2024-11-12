const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface FormaPagamentoData {
  nomeFormaPagamento: string;
}

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