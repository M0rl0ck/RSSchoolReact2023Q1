import IFormCard from '../../infostructure/IFormCard';
import React from 'react';
import FormCard from '../../base/formCard/FormCard';
import './formCards.css';

export default class FormCards extends React.Component<{ cards: IFormCard[] }> {
  render(): React.ReactNode {
    return (
      <div className="form-cards">
        {this.props.cards.map((card, index) => (
          <FormCard card={card} key={index} />
        ))}
      </div>
    );
  }
}
