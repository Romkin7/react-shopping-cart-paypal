export type Brands = "Apple" | "Samsung" | "OPPO" | "Huawei" | "Infinix"
export type Categories = "smartphones" | "laptops" | "fragrances"

interface IProduct {
    
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: Brands;
        category: Categories;
        thumbnail: string;
        images: string[];
        
}

export default IProduct;