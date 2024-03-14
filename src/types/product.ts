export default interface IProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    stock: number;
    onSale: boolean;
    salePrice: number;
    saleText: string;
    quantity: number;
}