export interface Loteria {
  id: number;
  nome: string;
}

export interface Concurso {
  loteriaId: number;
  concursoId: string;
}

export interface ConcursoId {
  data: string;
  id: string;
  loteria: number;
  numeros: string[];
}

export interface LoterryColor {
  loterryColor?: string;
}
