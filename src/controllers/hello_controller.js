import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['input', 'button', 'output']
  static values = {
    'enabled': Boolean
  }

  connect() {
    console.log('Hello controller connected')
    this._checkValidity()
  }

  disconnect() {
    console.log('Hello controller disconnected')
  }

  greet() {
    console.log(`Hello, ${this.name}!`)
    this.outputTarget.innerHTML = `Hello, ${this.name}!`
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
