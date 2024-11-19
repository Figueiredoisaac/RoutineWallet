import { Carteira, CarteiraData } from '../../../interfaces/carteira';

const API_URL = process.env.NEXT_PUBLIC_API_URL;



export const criarCarteira = async (carteiraData: CarteiraData) => {
  try {
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
} catch (error) {
  console.log(error);
  throw error;
}
};

export const obterCarteiras = async (): Promise<Carteira[]> => {
  try{
  const response = await fetch(`${API_URL}/carteiras`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a carteira');
  }
  return response.json();
} catch (error) {
  console.log(error);
  throw error;
}
};

export const obterCarteiraComboBox = async (): Promise<{ value: number; label: string }[]> => {

  const carteiras: Carteira[] = await obterCarteiras();

  return carteiras.map(carteira => ({
    value: carteira.id,
    label: carteira.nomeCarteira
  }));

  
};

export const deleteCarteira = async (id:number) => {
  try {
    const response = await fetch(`${API_URL}/carteiras/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao deletar carteira');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateCarteira = async (id:number, carteiraData: CarteiraData) => {
  try {
    const response = await fetch(`${API_URL}/carteiras/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carteiraData)
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar carteira');
    } 
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}