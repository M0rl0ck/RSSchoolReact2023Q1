import Form from '../../organisms/form/Form';
import React from 'react';
import IFormCard from 'infostructure/IFormCard';
import './formPage.css';
import CardsList from '../../organisms/cardsList/CardsList';
import FormCard from '../../molecules/formCard/FormCard';
import { useAppSelector } from '../../store/hooks/hooks';

export default function FormPage() {
  const { cards } = useAppSelector((state) => state.form);
  return (
    <div className="form-page">
      <div className="container">
        <h2>Form</h2>
        <Form />
        <CardsList<IFormCard> cards={cards} class_name={'form-cards'} Component={FormCard} />
      </div>
    </div>
  );
}
