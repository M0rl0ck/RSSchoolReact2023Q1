import IFormCard from '../../infostructure/IFormCard';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './form.css';
import Modal from '../../molecules/Modal/Modal';
import { SubmitButton } from '../../atoms/button/Button';
import { formSlice } from '../../store/redusers/formSlice';
import { useAppDispatch } from '../../store/hooks/hooks';

interface IInputs {
  name: string;
  date: string;
  country: CityEnum;
  consent: boolean;
  gender: 'male' | 'female';
  file: File[];
}

enum CityEnum {
  country = '123',
  USA = 'USA',
  Canada = 'Canada',
  Brazil = 'Brazil',
}

export default function Form() {
  const { addCard } = formSlice.actions;
  const dispatch = useAppDispatch();
  const [createdCard, setCreatedCard] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    const { name, date, country, gender } = data;
    const id = Date.now();
    const fileUrl = URL.createObjectURL(data.file[0]);
    const card: IFormCard = { name, id, date, country, gender, img: fileUrl };
    dispatch(addCard(card));
    setCreatedCard(true);
    setTimeout(() => {
      closeMessage();
    }, 4000);

    reset();
  };

  const closeMessage = () => {
    setCreatedCard(false);
  };

  return (
    <form className="form" name="myForm" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Write your name:{' '}
        <input
          {...register('name', {
            required: 'Name must be at least 3 characters',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters',
            },
            validate: (value) =>
              value.split(' ').some((el) => el[0] !== el[0].toLowerCase()) ||
              'First name or last name must start with a capital letter',
          })}
          id="name"
          placeholder="Write your name"
          type="text"
        />
        {errors.name && <span className="formError">{errors.name.message}</span>}
      </label>

      <label>
        Your birthday:{' '}
        <input
          {...register('date', {
            required: 'Please set date',
            validate: (value) => Date.parse(value) < Date.now() || 'Invalid date',
          })}
          name="date"
          type="date"
          id="date"
        />
        {errors.date && <span className="formError">{errors.date.message}</span>}
      </label>

      <label>
        Country:{' '}
        <select
          {...register('country', {
            validate: (value) => value !== '123' || 'Please choose country',
          })}
          name="country"
          id="country"
          defaultValue="123"
        >
          <option value="123" disabled>
            Choose country
          </option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Brazil">Brazil</option>
        </select>
        {errors.country && <span className="formError">{errors.country.message}</span>}
      </label>

      <label>
        I consent to my personal data:{' '}
        <input
          {...register('consent', {
            required: 'To continue, you must select',
          })}
          type="checkbox"
          name="consent"
          id="consent"
        />
        {errors.consent && <span className="formError">{errors.consent.message}</span>}
      </label>

      <div className="gender-choose">
        <span>Gender: </span>
        <label>
          male{' '}
          <input
            {...register('gender', { required: 'To continue, you must select' })}
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
        </label>

        <label>
          female{' '}
          <input
            {...register('gender', { required: 'To continue, you must select' })}
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
        </label>
        {errors.gender && <span className="formError">{errors.gender.message}</span>}
      </div>

      <label>
        Choose file:{' '}
        <input
          {...register('file', { required: 'Please select picture' })}
          type="file"
          name="file"
          id="file"
          accept="image/*"
        />
        {errors.file && <span className="formError">{errors.file.message}</span>}
      </label>

      <SubmitButton className="submit-button" text="Submit" />
      {createdCard && (
        <Modal callback={closeMessage}>
          <h2 className="form-message">The card has been created</h2>
        </Modal>
      )}
    </form>
  );
}
