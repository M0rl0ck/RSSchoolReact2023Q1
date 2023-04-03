import IFormCard from '../../infostructure/IFormCard';
import React from 'react';
import './formCard.css';

interface IFormCardProp {
  card: IFormCard;
}

export default class FormCard extends React.Component<IFormCardProp> {
  render() {
    return (
      <div className="form__card-container">
        <div className="form__logo-container">
          <img src={this.props.card.img} alt="IMAGE" />
        </div>
        <div className="form__card-info-container">
          <h2 className="form__card-name">Name: {this.props.card.name}</h2>
          <h3 className="form__card-date">Birthday: {this.props.card.date}</h3>
          <p className="form__card-category">Country: {this.props.card.country}</p>
          <p className="form__card-category">Gender: {this.props.card.gender}</p>
        </div>
      </div>
    );
  }
}
