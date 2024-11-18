const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface TransacaoData{
nomeTransacao : string;
codigoTipoTransacao : number;
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