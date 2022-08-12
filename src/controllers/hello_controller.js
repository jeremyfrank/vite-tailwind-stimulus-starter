import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'button']
  static values = {
    'enabled': Boolean
  }
  
  connect() {
    console.log('Hello controller connected', this.element)
    this._checkValidity()
  }
  
  disconnect() {
    console.log('Hello controller disconnected', this.element)
  }
  
  greet() {
    console.log(`Hello, ${this.name}!`)
  }
  
  handleKeyup() {
    this._checkValidity()
  }

  enabledValueChanged() {
    if (this.enabledValue) {
      this._enableButton()
    } else {
      this._disableButton()
    }
  }

  _checkValidity() {
    this.enabledValue = this.inputTarget.value.length > 0
  }

  _enableButton() {
    this.buttonTarget.removeAttribute("disabled")
  }
  
  _disableButton() {
    this.buttonTarget.setAttribute("disabled", "")
  }

  get name() {
    return this.inputTarget.value
  }
}
