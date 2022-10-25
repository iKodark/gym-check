import React from 'react';

import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { Wizard } from '@Components';
import { Informations, Payment } from './Components';

import { UsersContext } from '@Contexts';
import { useNavigate } from 'react-router-dom';
import { SchemaInformations, SchemaPayments } from './schemas';

const Subscribe = () => {
  const navigate = useNavigate();
  const { subscribeUser } = React.useContext(UsersContext);

  const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
  const [data, setData] = React.useState({});
  const { id } = useParams();

  const formInformations = useForm({ resolver: yupResolver(SchemaInformations) });
  const formPayments = useForm({ resolver: yupResolver(SchemaPayments) });

  const onSubmit = (data) => {
    setData(data);
    onOpenModal();
  };

  const confirmSubscribe = () => {
    subscribeUser(parseInt(id), data);
    onCloseModal();
    navigate('/dashboard');
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

      <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informações da inscrição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text fontSize="sm">Nome: {data?.name}</Text>
            </Box>
            <Box>
              <Text fontSize="sm">E-mail: {data?.email}</Text>
            </Box>
            <Box>
              <Text fontSize="sm">Número do cartão: {data?.cardNumber}</Text>
            </Box>
            <Box>
              <Text fontSize="sm">Nome do titular: {data?.cardName}</Text>
            </Box>
            <Box>
              <Text fontSize="sm">Validade do cartão: {data?.cardExpired}</Text>
            </Box>
            <Box>
              <Text fontSize="sm">CVV: {data?.cardCvv}</Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={confirmSubscribe}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Subscribe;
