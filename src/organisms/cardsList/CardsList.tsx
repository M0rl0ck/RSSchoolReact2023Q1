import React from 'react';

export default function CardsList<T extends { id: number }>({
  cards,
  class_name,
  Component,
}: {
  cards: T[];
  class_name: string;
  Component: ({ card }: { card: T }) => JSX.Element;
}) {
  return (
    <div className={class_name}>
      {cards.map((card) => (
        <Component card={card} key={card.id} />
      ))}
    </div>
  );
}
