import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('O nome é obrigatório !'),
  email: yup
    .string()
    .email('Por favor, informe um e-mail válido !')
    .required('O e-mail é obrigatório !')
});
