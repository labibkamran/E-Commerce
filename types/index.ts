export type Role = "USER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: string | null;
  image: string | null;
  hashedPassword: string | null;
  createdAt: string;
  updatedAt: string;
  role: Role;
}

export interface ProductImage {
  color: string;
  colorCode: string;
  image: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdDate: string;
  user: User;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  images: ProductImage[];
  reviews: Review[];
}

export interface CartProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImage: ProductImage;
  quantity: number;
  price: number;
}
