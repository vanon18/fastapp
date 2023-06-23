export interface Product{
    id: number;
    label: string;
    name: string;
    imageSrc: string;
    quantity?: number | 0;
    price: number;
}
