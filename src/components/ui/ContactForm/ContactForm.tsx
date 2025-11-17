import { siteConfig } from '../../../config/site.config';
import styles from './ContactForm.module.scss';
import { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

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
    setStatus('sending');
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
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
          disabled={status === 'sending'}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
          disabled={status === 'sending'}
        />

        <label htmlFor="message">Сообщение:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          required
          disabled={status === 'sending'}
        />

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Отправка...' : 'Отправить'}
        </button>

        {status === 'success' && <div>Сообщение успешно отправлено!</div>}

        {status === 'error' && <div>Ошибка: {error}</div>}
      </form>
    </>
  );
}
