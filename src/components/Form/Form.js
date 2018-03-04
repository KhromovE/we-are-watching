import React from 'react'
import PropTypes from 'prop-types'

import Field from '../Field/Field'
import SubmitButton from '../SubmitButton/SubmitButton'
import * as guyCondition from '../../constants/guyCondition'

import './Form.scss'

const Form = ({ onFocus, onBlur }) => (
  <form className="login-form">
    <Field
      id="email"
      type="email"
      onFocus={() => onFocus(guyCondition.WRITING_EMAIL)}
      onBlur={onBlur}
    >
      Email
    </Field>
    <Field
      id="password"
      type="password"
      onFocus={() => onFocus(guyCondition.WRITING_PASSWORD)}
      onBlur={onBlur}
    >
      Password
    </Field>
    <SubmitButton />
  </form>
)

Form.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}

export default Form
