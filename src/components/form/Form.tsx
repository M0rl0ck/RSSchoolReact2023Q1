import IFormCard from '../../infostructure/IFormCard';
import React from 'react';
import './form.css';

type FormProps = {
  callback: (card: IFormCard) => void;
};
export default class Form extends React.Component<FormProps> {
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  selectCountryRef: React.RefObject<HTMLSelectElement>;
  inputCheckboxRef: React.RefObject<HTMLInputElement>;
  inputRadioMaleRef: React.RefObject<HTMLInputElement>;
  inputRadioFemaleRef: React.RefObject<HTMLInputElement>;
  inputFileRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  constructor(props: FormProps) {
    super(props);
    this.formRef = React.createRef<HTMLFormElement>();
    this.inputNameRef = React.createRef<HTMLInputElement>();
    this.inputDateRef = React.createRef<HTMLInputElement>();
    this.selectCountryRef = React.createRef<HTMLSelectElement>();
    this.inputCheckboxRef = React.createRef<HTMLInputElement>();
    this.inputRadioMaleRef = React.createRef<HTMLInputElement>();
    this.inputRadioFemaleRef = React.createRef<HTMLInputElement>();
    this.inputFileRef = React.createRef<HTMLInputElement>();
  }

  submitHandl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.inputCheckboxRef.current?.checked) {
      return;
    }
    const files = this.inputFileRef.current?.files;
    if (files && files.length) {
      const [file] = files;
      const card: IFormCard = {
        name: this.inputNameRef.current?.value || '',
        date: this.inputDateRef.current?.value || '',
        country: this.selectCountryRef.current?.value || '',
        gender: this.inputRadioMaleRef.current?.checked ? 'male' : 'female',
        img: URL.createObjectURL(file),
      };
      this.props.callback(card);
      this.formRef.current?.reset();
    }
  };
  render(): React.ReactNode {
    return (
      <form className="form" action="" ref={this.formRef} onSubmit={this.submitHandl}>
        <label>
          Write your name:{' '}
          <input type="text" id="name" placeholder="Write your name" ref={this.inputNameRef} />
        </label>

        <label>
          Your birthday: <input type="date" id="date" ref={this.inputDateRef} />
        </label>

        <label>
          Country:{' '}
          <select name="" id="country" defaultValue="123" ref={this.selectCountryRef}>
            <option value="123" disabled>
              Choose country
            </option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Brazil">Brazil</option>
          </select>
        </label>

        <label>
          I consent to my personal data:{' '}
          <input type="checkbox" id="consent" ref={this.inputCheckboxRef} />
        </label>

        <div className="gender-choose">
          <span>Gender: </span>
          <label>
            male{' '}
            <input type="radio" id="male" name="gender" value="male" ref={this.inputRadioMaleRef} />
          </label>

          <label>
            female{' '}
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              ref={this.inputRadioFemaleRef}
            />
          </label>
        </div>

        <label>
          Choose file: <input type="file" id="file" accept="image/*" ref={this.inputFileRef} />
        </label>

        <input type="submit" className="submit-button" />
      </form>
    );
  }
}
