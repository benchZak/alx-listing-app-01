// interfaces/index.ts
export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  image: string;
  images?: string[];
  rating: number;
  address: {
    street: string;
    city: string;
    country: string;
  };
  category: string[];
  price: number;
  reviews?: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  host?: {
    name: string;
    avatar: string;
    about: string;
  };
}