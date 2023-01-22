export interface ProductCharacteristic {
    value: string;
    name: string;
}

export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    describtion: string;
    rating: number;
    createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: string;
    credit: number;
    oldPrice: number;
    describtion: string;
    characteristics: ProductCharacteristic[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    initialRating: number;
    reviews: ReviewModel[];
    reviewCount: number;
    rewiewAvg?: number;
    advantages: string;
    disadvantages: string;

}