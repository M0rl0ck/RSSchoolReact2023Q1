import Form from '../../organisms/form/Form';
import React, { useState } from 'react';
import IFormCard from 'infostructure/IFormCard';
import './formPage.css';
import CardsList from '../../organisms/cardsList/CardsList';
import FormCard from '../../molecules/formCard/FormCard';

export default function FormPage() {
  const [cards, setCards] = useState<IFormCard[]>([]);
  const addCard = (card: IFormCard) => {
    setCards((prev) => [...prev, card]);
  };
  return (
    <div className="form-page">
      <div className="container">
        <h2>Form</h2>
        <Form callback={addCard} />
        <CardsList<IFormCard> cards={cards} class_name={'form-cards'} Component={FormCard} />
      </div>
    </div>
  );
}
