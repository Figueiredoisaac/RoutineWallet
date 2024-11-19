const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface TransacaoData{
nomeTransacao : string;
codigoTipoTransacao : number;
valorParcela : number;
numeroParcelaTotal : number;
numeroParcelaAtual : number;
idFormaPagamento : number;
idCategoria : number;
idCarteira : number;
idCartao : number;
dataPrevista : string;
dataRealizada : string;
flagRecorrente : boolean;
}

export const criarTransacao = async (transacaoData: TransacaoData) => {
  if (transacaoData.codigoTipoTransacao !== 1 && transacaoData.codigoTipoTransacao !== 2) {
    throw new Error('codigoTipoTransacao deve ser 1 ou 2');
  }

  const response = await fetch(`${API_URL}/transacoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nomeTransacao: transacaoData.nomeTransacao,
      codigoTipoTransacao: transacaoData.codigoTipoTransacao,
      valorParcela: transacaoData.valorParcela,
      numeroParcelaTotal: transacaoData.numeroParcelaTotal,
      numeroParcelaAtual: transacaoData.numeroParcelaAtual,
      idFormaPagamento: transacaoData.idFormaPagamento === 0 ? null : transacaoData.idFormaPagamento,
      idCategoria: transacaoData.idCategoria === 0 ? null : transacaoData.idCategoria,
      idCarteira: transacaoData.idCarteira === 0 ? null : transacaoData.idCarteira,
      idCartao: transacaoData.idCartao === 0 ? null : transacaoData.idCartao,
      dataPrevista: transacaoData.dataPrevista,
      dataRealizada: transacaoData.dataRealizada,
      flagRecorrente: transacaoData.flagRecorrente
    })
  });
    console.log('body', JSON.stringify(transacaoData));
  if (!response.ok) {
    throw new Error('Falha ao criar a Transação');
  }
  return response.json();
};