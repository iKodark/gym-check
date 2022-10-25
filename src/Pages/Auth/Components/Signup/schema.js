import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Por favor, informe um e-mail válido !')
    .required('O e-mail é obrigatório !'),
  password: yup.string().required('A senha é obrigatória !'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas informadas não são iguais !')
});
