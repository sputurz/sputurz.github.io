import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormField } from '../FormField';
import { Icon } from '../Icon';
import {
  StyledRegistrationForm,
  StyledRegistrationFormBtn,
  StyledRegistrationFormErrorText,
  StyledRegistrationFormTitle,
  StyledRegistrationFormWrap,
} from './RegistrationForm.styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterUserConfirm, RegisterUserSchema } from '../../models';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../api/AuthApi';

interface IProps {
  onSuccess: () => void;
}

export const RegistrationForm: React.FC<IProps> = ({ onSuccess }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterUserConfirm>({
    resolver: zodResolver(RegisterUserSchema),
  });

  const RegisterMutation = useMutation({
    mutationFn: registerUser,
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['login'] });
      onSuccess();
      reset();
    },
  });

  return (
    <StyledRegistrationForm
      onSubmit={handleSubmit(({ email, password, name, surname }) => {
        RegisterMutation.mutate({ email, password, name, surname });
      })}
    >
      <StyledRegistrationFormTitle>Регистрация</StyledRegistrationFormTitle>
      <StyledRegistrationFormWrap>
        <FormField
          errorMessage={errors.email?.message}
          isError={!!errors.email}
        >
          <Icon name="MailIcon"></Icon>
          <input
            type="text"
            placeholder="Электронная почта"
            autoComplete="email"
            {...register('email')}
          ></input>
        </FormField>
        <FormField errorMessage={errors.name?.message} isError={!!errors.name}>
          <Icon name="UserIcon"></Icon>
          <input
            type="text"
            placeholder="Имя"
            autoComplete="given-name"
            {...register('name')}
          ></input>
        </FormField>
        <FormField
          errorMessage={errors.surname?.message}
          isError={!!errors.surname}
        >
          <Icon name="UserIcon"></Icon>
          <input
            type="text"
            placeholder="Фамилия"
            autoComplete="family-name"
            {...register('surname')}
          ></input>
        </FormField>
        <FormField
          errorMessage={errors.password?.message}
          isError={!!errors.password}
        >
          <Icon name="PasswordIcon"></Icon>
          <input
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            {...register('password')}
          ></input>
        </FormField>
        <FormField
          errorMessage={errors.confirmPassword?.message}
          isError={!!errors.confirmPassword}
        >
          <Icon name="PasswordIcon"></Icon>
          <input
            type="password"
            placeholder="Подтвердите пароль"
            autoComplete="new-password"
            {...register('confirmPassword')}
          ></input>
        </FormField>
      </StyledRegistrationFormWrap>

      <StyledRegistrationFormBtn
        type="submit"
        disabled={RegisterMutation.isPending}
      >
        Создать аккаунт
      </StyledRegistrationFormBtn>
      {RegisterMutation.error && (
        <StyledRegistrationFormErrorText>
          {RegisterMutation.error.message}
        </StyledRegistrationFormErrorText>
      )}
    </StyledRegistrationForm>
  );
};
