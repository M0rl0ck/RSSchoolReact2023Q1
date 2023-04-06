import ICharacterCard from '../../infostructure/ICharacterCard';

const BaseUrl = 'https://rickandmortyapi.com/api';

class Connector {
  private dataCards: ICharacterCard[] = [];
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getProducts(): Promise<ICharacterCard[]> {
    const url = new URL(BaseUrl + '/character');
    // url.searchParams.set('find', 'rick');
    try {
      const responce = await fetch(url);

      if (!responce.ok) {
        throw new Error(
          `Sorry, but servet return status ${responce.status} error: ${responce.statusText}`
        );
      }
      const data = await responce.json();
      this.dataCards = data.results;
    } catch (e) {
      console.log(e);
    }
    return this.dataCards;
  }

  async getProduct(id: number): Promise<ICharacterCard> {
    let result: ICharacterCard | undefined;
    const endUrl = `/${id.toString()}`;

    try {
      const responce = await fetch(`${this.url}${endUrl}`);
      if (!responce.ok) {
        throw new Error(
          `Sorry, but servet return status ${responce.status} error: ${responce.statusText}`
        );
      }
      const data: ICharacterCard = await responce.json();
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
