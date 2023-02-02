export interface Imobile {
    id: number;
    cartQuantity:number;
    name: string;
    price: number;
    url1: string;
    url2: string;
    colors:string[];
    features: Ifeatures
  }
  export interface Ifeatures {
    ram: number;
    memory: number;
    processor: string;
    os: string;
    screensize: string;
    display: string;
    battery: number;
    weight: number;
    warranty: number;
  }