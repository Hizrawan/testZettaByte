import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products: Product[] = [
  new Product(1,'Kokorowatari','Demon sword that harms and effectively kills oddities. The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.',444,'https://i.imgur.com/POR1PVd.jpg'),
  new Product(2,'Star Platinum','Star Platinum is the Stand of Kujo Jotaro. It has long, flowing hair, and resembling a tall, well-built man. It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.',555, 'https://i.imgur.com/cdJ6GDW.jpeg'),
  new Product(3,'The World','The World is the Stand of DIO. The World shows no particular personality, although it occasionally smiles as it pummels others, hinting that it may be a rather cruel entity that takes pleasure in causing pain. Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!',500, 'https://i.imgur.com/3KBm7hK.jpeg'),
  new Product(4,'3D Maneuver Gear','The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility. The equipment enables the user to fight in a 3D space as opposed to a 2D one. The equipment itself takes the form of a body harness that encompasses much of the body below the neck.',200,'https://i.imgur.com/9E0Agn2.jpg'),
  new Product(5,'Excalibur','Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur. As that which can be called the physical actualization of her ideals and the symbol of her heroism, it is her greatest and most powerful Noble Phantasm.',300,  'https://i.imgur.com/nutN73L.jpg'),
  new Product(6,'Dragon Slayer','It was too big to be called a sword. Massive, thick, heavy, and far too rough. Indeed, it was a heap of raw iron. The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.',450, 'https://i.imgur.com/WPdYq5Z.jpg')
]
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
