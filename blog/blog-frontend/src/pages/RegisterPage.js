import React from 'react';
import RegisterForm from '../containers/auth/RegisterForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
