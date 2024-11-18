const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface FormaPagamentoData {
  nomeFormaPagamento: string;
}

interface FormaPagamento {
  id: number;
  nomeFormaPagamento: string;
  dataCriada: string;
  dataAtualizada: string;
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

export const obterFormasPagamento = async (): Promise<FormaPagamento[]> => {
  const response = await fetch(`${API_URL}/formas-pagamento`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error('Falha ao criar a forma de pagamento');
  }
  return response.json();
};

export const obterFormaPagamentoComboBox = async (): Promise<{ value: number; label: string }[]> => {

  const formasPagamento: FormaPagamento[] = await obterFormasPagamento();

  return formasPagamento.map(formaPagamento => ({
    value: formaPagamento.id,
    label: formaPagamento.nomeFormaPagamento
  }));

  
};

export const deleteFormaPagamento = async (id:number) => {
  try {
    const response = await fetch(`${API_URL}/formas-pagamento/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao deletar forma de pagamento');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const atualizarFormaPagamento = async (id: number, formaPagamentoData: FormaPagamentoData) => {
  try {
    const response = await fetch(`${API_URL}/formas-pagamento/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formaPagamentoData)
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar forma de pagamento');
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

