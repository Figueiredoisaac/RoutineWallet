const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CarteiraData {
  nomeCarteira: string;
  nomeInstituicao: string;
}

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