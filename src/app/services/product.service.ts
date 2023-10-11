import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products = [
    {id: 1, name: "Caneca de cerâmica rústica", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg", category: "mugs", price: 49.90 },
    {id: 2, name: "Camiseta not today.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg", category: "t-shirts", price: 79.90 },
    {id: 3, name: "Caneca Black Ring", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg", category: "mugs", price: 39.90 },
    {id: 4, name: "Camiseta Broken Saints", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg", category: "t-shirts", price: 79.90 },
    {id: 5, name: "Camiseta Outcast", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg", category: "t-shirts", price: 79.90 },
    {id: 6, name: "Caneca The Grounds", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg", category: "mugs", price: 39.90 },
    {id: 7, name: "Camiseta evening", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg", category: "t-shirts", price: 79.90 },
    {id: 8, name: "Caneca preto fosco", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg", category: "mugs", price: 49.90 },
    {id: 9, name: "Caneca Never settle", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg", category: "mugs", price: 49.90 },
    {id: 10, name: "Camiseta DREAMER", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg", category: "t-shirts", price: 79.90 },
    {id: 11, name: "Caneca Decaf! P&Co", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg", category: "mugs", price: 49.90 },
    {id: 12, name: "Camiseta Ramones", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae laboriosam. Tenetur, repudiandae sapiente dolorem temporibus sed aliquam, alias doloremque consectetur inventore ullam ducimus ex. Consequatur quas facilis praesentium corporis.", image: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg", category: "t-shirts", price: 79.90 },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getProducts(): any[] {
    return this.products;
  }

  constructor() { }
}

