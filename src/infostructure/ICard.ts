export default interface ICard {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  discountPercentage: number;
  rating: {
    rate: number;
    count: number;
  };
}
