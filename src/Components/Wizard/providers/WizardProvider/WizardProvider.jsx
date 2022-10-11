import React from 'react';
import PropTypes from 'prop-types';

import { WizardContext } from '../../contexts';

const WizardProvider = ({ children, step, nextStep, backStep }) => (
  <WizardContext.Provider value={{ step, nextStep, backStep }}>{children}</WizardContext.Provider>
);

WizardProvider.propTypes = {
  children: PropTypes.node,
  step: PropTypes.number,
  nextStep: PropTypes.func,
  backStep: PropTypes.func
};

export default WizardProvider;
