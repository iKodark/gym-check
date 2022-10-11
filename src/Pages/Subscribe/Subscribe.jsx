import React from 'react';

import { Wizard } from '../../Components';
import FormWizard from '../../Components/Wizard/Wizard.jsx';
import { Informations } from './Components';

const Subscribe = () => {
  return (
    <>
      <Wizard.Container
        title="Inscreva-se"
        description="Faça sua inscrição para começar seus treinos.">
        <Wizard.Steps>
          <Wizard.Step
            title="Informações"
            description="Informações pessoais"
            subDescription="Nos informe suas informações pessoais para que possamos lhe notificar por e-mail."
            ref={React.useRef()}>
            <Informations />
          </Wizard.Step>
          <Wizard.Step title="Pagamento" ref={React.useRef()}>
            <Informations />
          </Wizard.Step>
        </Wizard.Steps>
      </Wizard.Container>

      <FormWizard />
    </>
  );
};

export default Subscribe;
