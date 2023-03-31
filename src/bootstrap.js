import App from './App'
import mount from './mount'

const devRoot = document.querySelector('#vue-app')

mount(devRoot, App)

export { mount }
