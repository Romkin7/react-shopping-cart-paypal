export type Brands =
    | 'Apple'
    | 'Samsung'
    | 'OPPO'
    | 'Huawei'
    | 'Infinix'
    | 'Microsoft Surface'
    | 'HP Pavilion'
    | 'Impression of Acqua Di Gio'
    | 'Royal_Mirage'
    | 'Fog Scent Xpressio'
    | 'Al Munakh'
    | 'Lord - Al-Rehab'
    | "L'Oreal Paris"
    | 'Hemani Tea'
    | 'Dermive'
    | 'ROREC White Rice'
    | 'Fair & Clear'
    | 'Saaf & Khaas'
    | 'Bake Parlor Big'
    | 'Baking Food Items'
    | 'fauji'
    | 'Dry Rose'
    | 'Boho Decor'
    | 'Flying Wooden'
    | 'LED Lights'
    | 'luxury palace'
    | 'Golden';
export type Categories =
    | 'smartphones'
    | 'laptops'
    | 'fragrances'
    | 'skincare'
    | 'groceries'
    | 'home-decoration';

export interface IBaseProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: Brands;
    category: Categories;
    thumbnail: string;
    
}

interface IProduct extends IBaseProduct {
    discountPercentage: number;
    rating: number;
    stock: number;
    images: string[];
}

export default IProduct;
