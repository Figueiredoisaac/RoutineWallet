import { Carteira } from './carteira';

export interface CartaoData {
    nomeInstituicao: string;
    valorLimite: number;
    idCarteira: number;
    dataVencimento: string;
    dataFechamento: string;
  }
  
export interface Cartao {
    id: number;
    nomeInstituicao: string;
    valorLimite: number;
    carteira: Carteira;
    dataVencimento: string;
    dataFechamento: string;
    dataCriada: string;
    dataAtualizada: string;
  }
