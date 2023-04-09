import ICharacterModalCard from '../../infostructure/ICharacterModalCard';
import ICharacterCard from '../../infostructure/ICharacterCard';

const BaseUrl = 'https://rickandmortyapi.com/api';

class Connector {
  private dataCards: ICharacterCard[] = [];
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getProducts(search = ''): Promise<ICharacterCard[]> {
    const url = new URL(this.url + '/character');
    if (search) {
      url.searchParams.set('name', search);
    }

    try {
      const responce = await fetch(url);

      if (!responce.ok && responce.status != 404) {
        throw new Error(
          `Sorry, but servet return status ${responce.status} error: ${responce.statusText}`
        );
      }
      if (responce.ok) {
        const data = await responce.json();
        this.dataCards = data.results;
      }
      if (responce.status === 404) {
        this.dataCards = [];
      }
    } catch (e) {
      console.log(e);
    }
    return this.dataCards;
  }

  async getProduct(id: number): Promise<ICharacterModalCard> {
    let result: ICharacterModalCard | undefined;
    const url = new URL(`${this.url}/character/${id.toString()}`);

    try {
      const responce = await fetch(url);
      if (!responce.ok) {
        throw new Error(
          `Sorry, but servet return status ${responce.status} error: ${responce.statusText}`
        );
      }
      const data: ICharacterModalCard = await responce.json();
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

const connector = new Connector(BaseUrl);

export default connector;
