export interface Empresa {
  empresa: string;
  categoria: string;
  id?: number; // Opcional - pode ser gerado pelo servidor
  createdAt?: Date; // Opcional - pode ser gerado pelo servidor
}
