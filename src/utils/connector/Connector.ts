import ICard from '../../infostructure/ICard';

class Connector {
  private dataCards: ICard[] = [];
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getProducts(): Promise<ICard[]> {
    if (this.dataCards.length) {
      return this.dataCards;
    }

    try {
      const responce = await fetch(`${this.url}`);

      if (!responce.ok) {
        throw new Error(
          `Sorry, but servet return status ${responce.status} error: ${responce.statusText}`
        );
      }
      const data = await responce.json();
      this.dataCards = data;
    } catch (e) {
      console.log(e);
    }
    return this.dataCards;
  }

  async getProduct(id: number): Promise<ICard> {
    let result: ICard | undefined;
    if (this.dataCards.length) {
      result = this.dataCards.find((el) => el.id === id);
      if (result) {
        return result;
      }
    }
    const endUrl = `/${id.toString()}`;

    try {
      const responce = await fetch(`${this.url}${endUrl}`);
      if (!responce.ok) {
        throw new Error(
          `Sorry, but servet return status ${responce.status} error: ${responce.statusText}`
        );
      }
      const data: ICard = await responce.json();
      result = data;
    } catch (e) {
      console.log(e);
    }

    if (!result) {
      throw new Error('No data');
    }
    return result;
  }
}

const url = 'https://fakestoreapi.com/products';

const connector = new Connector(url);

export default connector;
