import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Wizard } from '@Components';
import { Informations, Payment } from './Components';
import { SchemaInformations, SchemaPayments } from './schemas';

const Subscribe = () => {
  const formInformations = useForm({ resolver: yupResolver(SchemaInformations) });
  const formPayments = useForm({ resolver: yupResolver(SchemaPayments) });

  const onSubmit = () => {
    console.log('SUBMIT');
  };

  return (
    <>
      <Wizard.Container
        title="Inscreva-se"
        description="Faça sua inscrição para começar seus treinos.">
        <Wizard.Steps submit={onSubmit}>
          <Wizard.Step
            title="Informações"
            description="Informações pessoais"
            subDescription="Nos informe suas informações pessoais para que possamos lhe notificar por e-mail."
            {...formInformations}>
            <Informations />
          </Wizard.Step>
          <Wizard.Step
            title="Pagamento"
            description="Dados de pagamento"
            subDescription="Informe os dados do seu cartão para finalizar sua inscrição."
            {...formPayments}>
            <Payment />
          </Wizard.Step>
        </Wizard.Steps>
      </Wizard.Container>
    </>
  );
};

export default Subscribe;
