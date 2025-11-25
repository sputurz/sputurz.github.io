import { siteConfig } from '../../../config/site.config';
import { FormField } from '../FormField';
import styles from './ContactForm.module.scss';
import { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'pending' | 'success' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('pending');
    setError('');

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Ошибка при отправке формы');
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    }
  };

  return (
    <>
      <form className={styles['contact-form']} onSubmit={onSubmit}>
        <FormField htmlFor="name" errorMessage="This field is required.">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            disabled={status === 'pending'}
            placeholder="Name"
            autoComplete="given-name"
          />
        </FormField>

        <FormField htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            disabled={status === 'pending'}
            placeholder="Email"
            autoComplete="email"
          />
        </FormField>

        <FormField htmlFor="message">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
            disabled={status === 'pending'}
            placeholder="message"
          />
        </FormField>

        <button type="submit" disabled={status === 'pending'}>
          {status === 'pending' ? 'Отправка...' : 'Отправить'}
        </button>

        {status === 'success' && <div>Сообщение успешно отправлено!</div>}

        {status === 'error' && <div>Ошибка: {error}</div>}
      </form>
    </>
  );
}
