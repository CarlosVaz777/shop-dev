
export interface Product {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Types;
    gender: Category;
}

export type Category = 'men' | 'women' | 'kid' | 'unisex'
export type Size = 'X5' | '5' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Types = 'shirts' | 'pants' | 'hoodies' | 'hats'
