export interface ResponseItems {
  items: Item[];
}

export interface Item {
  code: number;
  descripcion: string;
  quantity: number;
  price: number;
  fecha: Date | string;
  idCategoria: number;
  imagenB64: string;
}
