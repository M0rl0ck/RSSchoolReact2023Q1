import ICharacterCard from './ICharacterCard';

export default interface ICharacterModalCard extends ICharacterCard {
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  episode: string[];
  url: string;
  created: string;
}
