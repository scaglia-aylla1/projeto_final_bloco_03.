import type { Categoria } from "./Categoria";
import type Usuario from "./Usuario";

export interface Produto {
  id: number;
  nome: string;
  descricao: string,
  preco: number;
  foto?: string; 
  categoria?: Categoria ; // Relacionamento com Categoria (se um produto tem uma categoria)
  usuario?: Usuario | null;
}