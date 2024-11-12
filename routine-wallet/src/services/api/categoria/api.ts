const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CategoriaData {
  nomeCategoria: string;
}

interface Categoria {
  id: number;
  nomeCategoria: string;
  dataCriada: string;
  dataAtualizada: string;
}

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