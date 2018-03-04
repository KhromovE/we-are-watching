import React, { PureComponent } from 'react'

import Guy from '../Guy/Guy'
import Form from '../Form/Form'
import * as guyCondition from '../../constants/guyCondition'

import './App.scss'

class App extends PureComponent {
  state = {
    condition: guyCondition.DO_NOTHING,
  }

  handleFocusInput = (condition) => {
    this.setState({
      condition,
    })
  }

  handleBlurInput = () => {
    this.setState({
      condition: guyCondition.DO_NOTHING,
    })
  }

  render() {
    const { condition } = this.state

    return (
      <div className="app">
        <div className="app__body">
          <div className="app__body__guy">
            <Guy
              condition={condition}
            />
          </div>
          <div className="app__body__form">
            <Form
              onFocus={this.handleFocusInput}
              onBlur={this.handleBlurInput}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
