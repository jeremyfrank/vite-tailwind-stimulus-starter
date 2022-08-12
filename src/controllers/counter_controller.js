import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    count: Number,
  }

  connect() {
    console.log('Counter controller connected', this.element)
  }

  disconnect() {
    console.log('Counter controller disconnected', this.element)
  }

  countValueChanged() {
    this.element.innerHTML = `count is ${this.countValue}`
  }

  increment() {
    this.countValue++
  }

  get name() {
    return this.nameTarget.value
  }
}
