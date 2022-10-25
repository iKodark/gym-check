import React from 'react';
import PropTypes from 'prop-types';

import { WizardContext } from '../../contexts';

const WizardProvider = ({ children, step, nextStep, backStep, toStep, maxStep, data }) => (
  <WizardContext.Provider value={{ step, nextStep, backStep, toStep, maxStep, data }}>
    {children}
  </WizardContext.Provider>
);

WizardProvider.propTypes = {
  children: PropTypes.node,
  step: PropTypes.number,
  maxStep: PropTypes.number,
  nextStep: PropTypes.func,
  backStep: PropTypes.func,
  toStep: PropTypes.func,
  data: PropTypes.object
};

export default WizardProvider;
