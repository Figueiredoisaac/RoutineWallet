const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CartaoData {
  nomeInstituicao: string;
  valorLimite: number;
  dataVencimento: string;
  dataFechamento: string;
}

interface Cartao {
  id: number;
  nomeInstituicao: string;
  valorLimite: number;
  dataVencimento: string;
  dataFechamento: string;
  dataCriada: string;
  dataAtualizada: string;
}

export const criarCartao = async (cartaoData: CartaoData) => {
  try {
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
  return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const fetchCartoes = async () => {
  try {
    const response = await fetch(`${API_URL}/cartoes`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
  });
  if (!response.ok) {
    throw new Error('Erro ao buscar cartões');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const deleteCartao = async (id:number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao deletar cartão');
    }
    return true;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const updateCartao = async (id:number, updatedData:CartaoData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar cartão');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const obterCartaoComboBox = async (): Promise<{ value: number; label: string }[]> => {

  const cartao: Cartao[] = await fetchCartoes();

  return cartao.map(cartao => ({
    value: cartao.id,
    label: cartao.nomeInstituicao
  }));

  
};