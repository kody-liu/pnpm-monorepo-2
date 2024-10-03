export { App } from './App.js'
import { createRoot } from 'react-dom/client'

export const render = (App: JSX.Element) => {
  const root = document.getElementById('root');
  if (!root) throw Error('No root')
  createRoot(root).render(App)
}