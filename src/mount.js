import { createApp } from 'vue'

const mount = (el, component) => {
  const app = createApp(component)
  app.mount(el)
}

export default mount