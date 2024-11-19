import { Categoria, CategoriaData } from '../../../interfaces/categoria';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const criarCategoria = async (categoriaData: CategoriaData) => {
  const response = await fetch(`${API_URL}/categorias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoriaData)
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a categoria');
  }
  return response.json();
};

export const obterCategorias = async (): Promise<Categoria[]> => {
  const response = await fetch(`${API_URL}/categorias`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a categoria');
  }
  return response.json();
};

export const obterCategoriaComboBox = async (): Promise<{ value: number; label: string }[]> => {

  const categorias: Categoria[] = await obterCategorias();

  return categorias.map(categoria => ({
    value: categoria.id,
    label: categoria.nomeCategoria
  }));

  
};

export const deleteCarteira = async (id:number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao deletar carteira');
    }
    return true;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const updateCarteira = async (id:number, updatedData:CategoriaData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar carteira');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
