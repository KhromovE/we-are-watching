import React from 'react'
import PropTypes from 'prop-types'

import './Field.scss'

const Field = ({ id, type, placeholder, onFocus, onBlur, children }) => (
  <div className="field">
    <label className="field__label" htmlFor={id}>
      {children}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </label>
  </div>
)

Field.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

Field.defaultProps = {
  placeholder: null,
}

export default Field
