import IFormCard from '../../infostructure/IFormCard';
import React from 'react';

export default class FormCards extends React.Component<{ card: IFormCard[] }> {
  render(): React.ReactNode {
    return <div className="form-cards"></div>;
  }
}
