export interface IBentoItem {
  id: string;
  title: string;
  size: 'large' | 'medium' | 'small';
  image?: string;
  bgColor?: string;
  category: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}