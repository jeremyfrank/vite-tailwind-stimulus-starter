import './style.css'
import './controllers'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="flex gap-2 items-center">
      <a href="https://vitejs.dev">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      +
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <img src="/javascript.svg" class="logo vanilla" alt="JavaScript logo" />
      </a>
      +
      <a href="https://stimulus.hotwired.dev/">
      <img src="/stimulus.svg" class="logo stimulus" alt="Stimulus logo" />
      </a>
      +
      <a href="https://tailwindcss.com/">
        <img src="/tailwind.svg" class="logo tailwind" alt="Tailwind CSS logo" />
      </a>
    </div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <form class="flex" data-controller="hello">
    <label for="name" class="sr-only">
      Your Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Enter your name"
      class="border border-r-0 p-2 flex-1"
      data-hello-target="name"
    >
    <button
      class="bg-sky-700 text-white px-4 py-2"
      data-action="hello#greet:prevent"
    >
      Greet
    </button>
  </form>
`

setupCounter(document.querySelector('#counter'))
