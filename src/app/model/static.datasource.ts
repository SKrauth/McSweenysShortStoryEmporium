import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Misadventures of a Common Box Turtle", "Fiction", 10, 2, "../../assets/F_10.png"),
        new Product(2, "A Day in the Life of Abraham Lincoln", "Non-Fiction", 15, 3),
        new Product(3, "A Good Deed", "Fiction", 5, 1),
        new Product(4, "Arsonists Dream", "Fiction", 10, 2),
        new Product(5, "Library of Congress", "Non-Fiction", 15, 3),
        new Product(6, "Almost Conquered the World", "Fiction", 5, 1),
        new Product(7, "Everywhere We Walked", "Fiction", 5, 1),
        new Product(8, "Famous Patina", "Non-Fiction", 5, 1),
        new Product(9, "Frostbite", "Non-Fiction", 15, 3),
        new Product(10, "Old Ironsides", "Non-Fiction", 10, 2),
        new Product(11, "An Old, Fat Cat", "Fiction", 5, 1),
        new Product(12, "Buffalo Brothers", "Fiction", 10, 2),
        new Product(13, "Save the Date", "Fiction", 10, 2),
        new Product(14, "Secret Treasures", "Fiction", 5, 1),
        new Product(15, "The First Ladies Cat", "Non-Fiction", 10, 2),
        new Product(16, "Mining for Diamonds", "Non-Fiction", 15, 3),
        new Product(17, "Ancient Runes", "Non-Fiction", 5, 1),
        new Product(18, "Monstrous Children", "Fiction", 15, 3),
        new Product(19, "Lily in the Pond", "Fiction", 10, 2),
        new Product(20, "The Ex", "Fiction", 5, 1),
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return Observable.from([order]);
    }
}