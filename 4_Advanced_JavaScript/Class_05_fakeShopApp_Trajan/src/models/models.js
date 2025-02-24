export default class Product {
    constructor(id, title, price, desc, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.desc = desc;
        this.image = 'https://cdn.pixabay.com/photo/2020/11/23/06/21/television-5768804_640.png';
        this.category = category;
    }
}

export class Category {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}
