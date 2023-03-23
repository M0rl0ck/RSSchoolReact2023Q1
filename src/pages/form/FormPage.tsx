import Form from '../../components/form/Form';
import React from 'react';
import FormCards from '../../components/formCards/FormCards';
import IFormCard from 'infostructure/IFormCard';

export default class FormPage extends React.Component {
  state: { cards: IFormCard[] } = { cards: [] };
  addCard = (card: IFormCard) => {
    this.setState({ cards: [...this.state.cards, card] });
  };
  render(): React.ReactNode {
    return (
      <div className="form-page">
        <div className="container">
          <h2>Form</h2>
          <Form callback={this.addCard} />
          <FormCards card={this.state.cards} />
        </div>
      </div>
    );
  }
}
