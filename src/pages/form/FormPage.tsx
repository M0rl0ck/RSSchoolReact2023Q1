import Form from '../../components/form/Form';
import React, { useState } from 'react';
import FormCards from '../../components/formCards/FormCards';
import IFormCard from 'infostructure/IFormCard';
import './formPage.css';

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
        <FormCards cards={cards} />
      </div>
    </div>
  );
}
