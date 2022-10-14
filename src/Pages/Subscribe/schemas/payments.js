import * as yup from 'yup';

export default yup.object().shape({
  cardNumber: yup.string().required('Obrigatório !'),
  cardName: yup.string().required('Obrigatório !'),
  cardExpired: yup.string().required('Obrigatório !'),
  cardCvv: yup.string().required('Obrigatório !')
});
