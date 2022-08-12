import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['name']
  
  connect() {
    console.log('Hello controller connected', this.element)
  }

  disconnect() {
    console.log('Hello controller disconnected', this.element)
  }

  greet() {
    console.log(`Hello, ${this.name}!`)
  }

  get name() {
    return this.nameTarget.value
  }
}
