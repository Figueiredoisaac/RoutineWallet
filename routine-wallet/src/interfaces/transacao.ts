import { Categoria } from './categoria';
import { Carteira } from './carteira';
import { Cartao } from './cartao';
import { FormaPagamento } from './forma-pagamento';

export interface TransacaoData{
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

    export interface Transacao{
        nomeTransacao : string;
        codigoTipoTransacao : number;
        valorParcela : number;
        numeroParcelaTotal : number;
        numeroParcelaAtual : number;
        formaPagamento : FormaPagamento;
        categoria : Categoria;
        carteira : Carteira;
        cartao : Cartao;
        dataPrevista : string;
        dataRealizada : string;
        flagRecorrente : boolean;
    }