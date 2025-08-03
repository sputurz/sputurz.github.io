import { useEffect, useState } from 'react';
import {
  closeAuthModal,
  selectAuthModal,
} from '../components/AuthModal/AuthModalSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectAuthModal);
  const [authType, setAuthType] = useState<string>('auth');
  const [isRegisterSuccess, SetIsRegisterSuccess] = useState(false);

  const toggleAuthType = () => {
    setAuthType((prev) => (prev === 'register' ? 'auth' : 'register'));
  };

  const closeModal = () => {
    dispatch(closeAuthModal());
    setAuthType('auth');
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onSuccessRegister = () => {
    SetIsRegisterSuccess(true);
    setAuthType('auth');
  };

  const onSuccessBtnClick = () => {
    SetIsRegisterSuccess(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeAuthModal());
        setAuthType('auth');
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, dispatch]);

  return {
    isOpen,
    authType,
    toggleAuthType,
    closeModal,
    handleBackdropClick,
    isRegisterSuccess,
    onSuccessRegister,
    onSuccessBtnClick,
  };
};
