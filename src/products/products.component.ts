import {Component} from '@angular/core';
@Component({
    selector:'app-products',
    templateUrl:"./products.component.html",
    styleUrls:['./products.component.css']
})
export class ProductsComponent{
    title="Products";
    products=[{
        name:"iphone",
        id:1,
        price:1000,
        quantityInOrder:0
    },
{
    name:"Nokia",
    id:2,
    price:2000,
    quantityInOrder:0
}]
addToCart(product:any)
{
    product.quantityInOrder+=1;
}
    
}
