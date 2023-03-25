import React from 'react';

type FormMessageProps = {
  callback: () => void;
};

export default class FormCreateMessage extends React.Component<FormMessageProps> {
  render(): React.ReactNode {
    return (
      <div className="form-message-wrapper" onClick={this.props.callback}>
        <div className="form-message-container">
          <span className="close-button" onClick={this.props.callback}>
            X
          </span>
          <h2 className="form-message">The card has been created</h2>
        </div>
      </div>
    );
  }
}
