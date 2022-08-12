import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = {
    count: Number,
  }

  connect() {
    console.log('Counter controller connected')
  }

  disconnect() {
    console.log('Counter controller disconnected')
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
