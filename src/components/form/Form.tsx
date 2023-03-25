import IFormCard from '../../infostructure/IFormCard';
import React from 'react';
import './form.css';

type FormProps = {
  callback: (card: IFormCard) => void;
};

const emptyErrors = {
  nameError: '',
  dateError: '',
  countryError: '',
  consentError: '',
  genderError: '',
  logoError: '',
};

type StateType = {
  errors: typeof emptyErrors;
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
  state: StateType;
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
    this.state = { errors: { ...emptyErrors } };
  }

  validationForm: () => boolean = () => {
    let isError = false;
    const errors = { ...emptyErrors };

    if (
      !this.inputNameRef.current?.value ||
      this.inputNameRef.current?.value.split(' ').some((el) => el.length < 3)
    ) {
      isError = true;
      errors.nameError = 'Name must be at least 3 characters';
    } else if (
      this.inputNameRef.current?.value.split(' ').some((el) => el[0] !== el[0].toUpperCase())
    ) {
      isError = true;
      errors.nameError = 'First name or last name must start with a capital letter';
    }

    if (!this.inputDateRef.current?.value) {
      isError = true;
      errors.dateError = 'Set date';
    } else if (Date.parse(this.inputDateRef.current?.value) > Date.now()) {
      isError = true;
      errors.dateError = 'Invalid date';
    }

    if (this.selectCountryRef.current?.value === '123') {
      isError = true;
      errors.countryError = 'Please choose country';
    }

    if (!this.inputCheckboxRef.current?.checked) {
      isError = true;
      errors.consentError = 'To continue, you must select';
    }

    if (!this.inputRadioMaleRef.current?.checked && !this.inputRadioFemaleRef.current?.checked) {
      isError = true;
      errors.genderError = 'To continue, you must select';
    }

    if (this.inputFileRef.current?.files?.length === 0) {
      isError = true;
      errors.logoError = 'Please select picture';
    }

    this.setState({ errors: errors });
    return isError;
  };

  submitHandl = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ errors: { ...emptyErrors } });
    if (this.validationForm()) {
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
          <span className="formError">{this.state.errors.nameError}</span>
        </label>

        <label>
          Your birthday: <input type="date" id="date" ref={this.inputDateRef} />
          <span className="formError">{this.state.errors.dateError}</span>
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
          <span className="formError">{this.state.errors.countryError}</span>
        </label>

        <label>
          I consent to my personal data:{' '}
          <input type="checkbox" id="consent" ref={this.inputCheckboxRef} />
          <span className="formError">{this.state.errors.consentError}</span>
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
          <span className="formError">{this.state.errors.genderError}</span>
        </div>

        <label>
          Choose file: <input type="file" id="file" accept="image/*" ref={this.inputFileRef} />
          <span className="formError">{this.state.errors.logoError}</span>
        </label>

        <input type="submit" className="submit-button" />
      </form>
    );
  }
}
