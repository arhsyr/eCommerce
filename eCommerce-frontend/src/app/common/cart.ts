import { Item } from "./item";

export class Cart {
    id: string;
    name: string;
    imgageUrl: string;
    price: number;
    quantity: number;
    
    constructor(item: Item) {
        this.id = item.id;
        this.name = item.name;
        this.imgageUrl = item.imageUrl;
        this.price = item.price;
        this.quantity = 1;
    }
}
